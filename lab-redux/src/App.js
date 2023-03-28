import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">      
      <Outlet />
    </div>
  );
}

export default App;
