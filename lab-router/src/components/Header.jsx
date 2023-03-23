import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header>
     <li>
        <Link to="/">Home</Link>
      </li> 
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </header>
  )
}