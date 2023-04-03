import { Formik, Field, ErrorMessage, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addInvoice } from "../store/features/bankSlice";

const CreateInvoice = () => {
  const balance = useSelector(state => state.bank.balance);
  const dispatch = useDispatch();
  return(
    <div>
      CreateInvoice
      <Formik 
        initialValues={{
          accountNumber: '',
          money: 0
        }}
        validate={({accountNumber, money}) => {
          const errors = {}

          if(accountNumber.length !== 16){
            errors.accountNumber = 'Should be 16 symbols'
          }
          if(money > balance){
            errors.money = `You have only ${balance} $`
          }

          return errors
        }}

        onSubmit={({ money, accountNumber }) => {
          dispatch(addInvoice({ money: +money, accountNumber, status: 'pending'}))
        }}
      >
        <Form>
          <p>Your balance: {balance}</p>
          <Field name="accountNumber" placeholder="Account number"/>
          <ErrorMessage name="accountNumber" component="div"/>
          <br />
          <Field name="money" placeholder="Amount"/>
          <ErrorMessage name="money" component="div"/>
          <button type="submit">Send</button>
        </Form>
      </Formik>

    </div>
  )
}

export default CreateInvoice