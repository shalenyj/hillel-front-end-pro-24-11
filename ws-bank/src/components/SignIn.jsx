import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api";
import http from "../api/http";

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <Formik
    initialValues= {{
      email: '',
      password: '',
    }}
    onSubmit = {async(values) => {
      try{
        const { data: { token } } = await signIn(values)
        http.defaults.headers['Authorization'] = token;

        navigate('/home')
      } catch(error){
        console.log(error)
      }
    }}
    validate = {({ email, password }) => {
      const errors = {};
      if (!email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
      ) {
        errors.email = 'Invalid email address';
      }

      if(!password){
        errors.password = 'Required';
      }

      if(password.length < 8){
        errors.password = 'Min 8 symbols'
      }

      return errors;
    }}
    >
      {({ isSubmitting }) => (
        <Form>
          Sign-in
          <div>
            <Field type="email" name="email" id="email" placeholder="Email" />
            <ErrorMessage name="email" component="div"></ErrorMessage>
          </div>
          <div>
            <Field type="password" name="password" id="password" placeholder="Password"/>
            <ErrorMessage name="password" component="div"></ErrorMessage>
          </div>
          <button type="submit" disabled={isSubmitting}>Sumbit</button>
        </Form>
      )}
    </Formik>
  )
}

export default SignIn;