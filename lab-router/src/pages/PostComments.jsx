import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchPostComments } from "../api";


export default function PostComments(){
  const [comments, setComments] = useState([])
  const params = useParams()

  const getPostDetails = async(id) => {
    const { data } = await fetchPostComments(id);
    setComments(data)
  }

  useEffect(() => {
    getPostDetails(params.id)
  }, [])
  
  if(!comments.length){
    return null
  }

  const CommentList = comments.map(comment => <div>
     <p>Comment id: {comment.id}</p>
      <p>Comment title: {comment.name}</p>
      <p>Comment body: {comment.body}</p>
      <hr />
  </div>)

  return(
    <div>
      {CommentList}
    </div>
  )
}