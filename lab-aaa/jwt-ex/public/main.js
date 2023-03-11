const url = 'http://localhost:3002';
let token = '';

const signUp = (email, password) =>
  axios.post(`${url}/sign-up`, { email, password})

const signIn = (email, password) =>
  axios.post(`${url}/sign-in`, { email, password})

const addSU = (email, password, token) =>
  axios.post(`${url}/add-su`, { email, password }, {
    headers: {
      Authorization: token
    }
  })

document.forms['sign-up'].addEventListener('submit', event => {
  event.preventDefault()
  const email = event.target.email.value;
  const password = event.target.password.value;
  signUp(email,password)
    .then(console.log)
})

document.forms['sign-in'].addEventListener('submit', async event => {
  event.preventDefault()
  const email = event.target.email.value;
  const password = event.target.password.value;
  const { data } = await signIn(email,password)
  token = data.token
})

document.forms['create-su'].addEventListener('submit', async event => {
  event.preventDefault()
  const email = event.target.email.value;
  const password = event.target.password.value;
  await addSU(email,password, token)
    .then(console.log)
})