import { createBrowserRouter } from "react-router-dom";

import Auth from '../pages/Auth';
import Kasa from '../pages/Kasa';
import Bankomat from '../pages/Bankomat';
import Home from '../pages/Home';
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import CreateInvoice from "../pages/CreateInvoice";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: '',
        element: <SignUp />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
    ]
  },
  {
    path: '/kasa',
    element: <Kasa />
  },
  {
    path: '/bankomat',
    element: <Bankomat />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/create-invoice',
    element: <CreateInvoice />
  }
])

export default router;