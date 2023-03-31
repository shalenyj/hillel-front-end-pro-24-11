import { createBrowserRouter } from "react-router-dom";
import AntPage from "../pages/AntPage";
import Bankomat from "../pages/Bankomat";
import FormikPage from "../pages/FormikPage";
import Kasa from "../pages/Kasa";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/bankomat',
    element: <Bankomat />
  },
  {
    path: '/kasa',
    element: <Kasa />
  },
  {
    path: '/formik',
    element: <FormikPage />
  },
  {
    path: '/ant',
    element: <AntPage />
  }
])

export default router