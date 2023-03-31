import { useFormik } from "formik";

const emails = [];

const validateEmail = (email) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(emails.includes(email))
  }, 500)
})

const validate = async ({ firstName, email }) => {
  const errors = {}
  if(!firstName){
    errors.firstName = 'Поле обовязкове'
  }

  if(firstName.length > 22){
    errors.firstName = 'Максимальна довжина 22'
  }

  // const emailUniqueResult = await validateEmail(email)

  // if(emailUniqueResult){
  //   errors.email = 'Введіть унікальний мейл'
  // }

  // console.log(errors)
  return errors
  
}

const FormikPage = () => {
  const formik = useFormik({ 
    initialValues: {
      email: 'ivan@mail.com',
      firstName: ''
    },
    validate,
    validateOnChange: false,
    onSubmit(values, { setSubmitting }){
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 2000);
    }
  })
  return (
    <div>
      Hello from Formik
      <form onSubmit={formik.handleSubmit} style={{ marginTop: '100px' }}>
        <label style={{ display: 'block' }}>
          Email
          <input 
            type="email" 
            name="email"  
            id="email" 
            placeholder="Provide your email" 
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ?  <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
        </label>
        <label>
          First name
          <input 
            type="text" 
            name="firstName"  
            id="firstName" 
            placeholder="Provide your name" 
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
         {formik.errors.firstName ?  <div style={{ color: 'red' }}>{formik.errors.firstName}</div> : null}
        </label>
        <button type="submit" disabled={formik.isSubmitting}>Submit</button>
      </form>
    </div>
  )
}

export default FormikPage;