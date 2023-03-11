const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    password: { type: String, required: true },
    email: { type: String, required:  true, unique: true },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: { createdAt: 'created_at' } });

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) next();
    const user = this;
    bcrypt.genSalt(SALT_WORK_FACTOR)
        .then(salt => {
            bcrypt.hash(user.password, salt)
                .then(hash => {
                    user.password = hash;
                    next();
                })
                .catch(err => {
                    next(err);
                });
        })
        .catch(err => {
            next(err);
        });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.generateMainToken = function () {
  return jwt.sign({
      isAdmin: this.isAdmin,
      email: this.email,
      isMain: true,
  }, process.env.JWT_SECRET, {
      expiresIn: 43400000
  });
};

module.exports = mongoose.model('User', UserSchema);
