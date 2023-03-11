const { check, validationResult } = require('express-validator/check');

const User = require('../models/user');
const checkToken = require('../../utils/checkToken');

module.exports = (app, logger) => {
    /*
  req.body.params{
    email: String,
    password: String
  }
  */

    app.post(
        '/sign-up',
        [
            check('email')
                .isEmail()
                .withMessage('Please provide valid email')
                .custom(async email => {
                    const result = await User.findOne({ email });
                    if (result){
                      throw 'Email allready in use';
                    }
                }),
            check('password')
                .isLength({ min: 6, max: 30 })
                .withMessage('Password should contain at least 6 symbols, and less than 30')
        ],
        async (req, res) => {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({ errors: errors.array() });
                }

                const { email, password } = req.body;
                const user = new User({ email, password });

                const createdUser = await user.save();

                if (!createdUser) {
                    throw { message: 'User did not created', code: 500 };
                }


                res.status(200).json({ status: true });
            } catch (err) {
                if (err instanceof Error) {
                    console.log(err);
                    res.status(500).json({ status: false, message: 'Unexpected error, details at logs' });
                } else {
                    res.status(err.code).json({ status: false, message: err.message });
                }
            }
        }
    );
    /*
  req.body.params{
    email: String,
    password: String
  }
  */
    app.post(
        '/sign-in',
        [
            check('email')
                .isEmail()
                .withMessage('Please provide valid email')
                .custom(async value => {
                    const result = await User.findOne({ email: value });
                    if (!result) {
                      throw 'Email doesn\'t fit our records, or password is incorrect';
                    }
                }),
            check('password')
                .isLength({ min: 6, max: 30 })
                .withMessage('Invalid password')
        ],
        async (req, res) => {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({ errors: errors.array() });
                }

                const { email, password } = req.body;

                const user = await User.findOne({ email });

                if (!user) {
                    res.status(422).json({ errors: [{ param: 'email', msg: 'Email doesn\'t fit our records' }] });
                }

                const result = await user.comparePassword(password);

                if (!result) {
                    res.status(422).json({ errors: [{ param: 'email or password', msg: 'Email doesn\'t fit our records, or password is incorrect' }] });
                }

                res
                    .status(200)
                    .json({ status: true, token: user.generateMainToken(), user: { isActivated: user.isActivated, email: user.email, isAdmin: user.isAdmin, firstName: user.firstName, secondName: user.secondName, phone: user.phone, geoPosition: user.geoPosition, } });
            } catch (err) {
                if (err instanceof Error) {
                    console.log(err);
                    res.status(500).json({ status: false, message: 'Unexpected error, details at logs' });
                } else {
                    res.status(err.code).json({ status: false, message: err.message });
                }
            }
        }
    );
    app.post('/add-su', async (req, res) => {
        const { email, password } = req.body;
        const token = req.get('Authorization');
        if (token) {
            try {
                const { isAdmin } = await checkToken(token);
                if (!isAdmin) {
                    throw { message: 'Permision denied', code: 403 };
                }

                const user = new User({ email, password, isAdmin: true });
                const createdUser = await user.save();

                if (!createdUser) {
                    throw { message: 'Error while creating admin', code: 400 };
                }

                res.status(200).json({ status: true, user: createdUser });
            } catch (err) {
                if (err instanceof Error) {
                    res.status(500).json({ status: false, message: 'Unexpected error, details at logs' });
                } else {
                    res.status(err.code).json({ status: false, message: err.message });
                }
            }
        } else {
            res.send(401).json({ status: false });
        }
    });
};
