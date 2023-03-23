import { Outlet, Link} from "react-router-dom";

export default function PostPageWraper(){
  return(
    <div>
      Header text
      <div>
        <Link to={'/posts'}>Posts</Link>
      </div>
      <hr />
      <Outlet />
      <hr />
      After text
    </div>
  )
}