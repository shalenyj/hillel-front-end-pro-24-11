import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMoney } from "../store/features/bankSlice";

const Kasa = () => {
  const balance = useSelector(state => state.bank.balance)
  const dispatch = useDispatch()
  return (
    <div>
      Kasa
      <Formik
        initialValues={{
          money: 0
        }}
        validate={({ money }) => {
          if(money <= 0){
            return {
              money: 'Min value 1'
            }
          }
          return {}
        }}
        onSubmit={({money}) => {
          dispatch(addMoney(money))
        }}
      >
        <Form>
          <p>Balance: {balance}</p>
          <Field name="money" type="number" step="1"></Field>
          <ErrorMessage name="money" component="div"></ErrorMessage>
          <button type="submit">Add money</button>
          <br />
          <Link to={'/home'}>Home</Link>
        </Form>
      </Formik>

    </div>
  )
}

export default Kasa;