import { createBrowserRouter } from "react-router-dom";
import Bankomat from "../pages/Bankomat";
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
  }
])

export default router