const concatenate = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
});

concatenate
  .then((value) => `${value} | and bar`)
  .then((value) => `${value} | and bar again`)
  .then((value) => `${value} | and again`)
  .then((value) => `${value} | and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });