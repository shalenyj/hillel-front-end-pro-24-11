import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

