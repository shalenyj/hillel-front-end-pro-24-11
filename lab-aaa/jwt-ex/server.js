const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const db = require('./app/db');

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

db(url)
    .then(() => {
        require('./app/routes/index')(app);
        app.listen(process.env.AUTH_SERVICE_PORT, () => {
            console.log(`We live at ${process.env.AUTH_SERVICE_PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });
