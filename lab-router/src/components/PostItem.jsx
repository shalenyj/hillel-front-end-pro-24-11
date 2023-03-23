import { Link } from "react-router-dom";

export default function PostItem(props){
  return(
    <div>
      <p>Post id: {props.item.id}</p>
      <p>Post title: {props.item.title}</p>
      <Link to={`/posts/${props.item.id}`}>Details</Link>
      <hr />
    </div>
  )
}