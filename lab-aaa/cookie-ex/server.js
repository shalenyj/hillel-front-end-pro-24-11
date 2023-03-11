const express = require('express');
const dayjs = require('dayjs')
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.static('public'));
app.use(cookieParser())

app.get('/get-cookie', (req, res) => {
  // Set cookie
  res.cookie('myCookie', 'Hello');

  // res.cookie("secureCookie", 'Secure Hello', {
  //   // secure: true,
  //   httpOnly: true,
  //   expires: dayjs().add(30, "days").toDate(),
  // });


  res.send('Cookie has been set!');
})

app.get('/get-order', (req, res) => {

  const cookie = req.cookies.myCookie;
  
  res.status(200).json({ valueFromCookie: cookie});
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
