import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { fetchPostDetails } from "../api";


export default function PostPage(){
  const [item, setItem] = useState()
  const params = useParams()

  const getPostDetails = async(id) => {
    const { data } = await fetchPostDetails(id);
    setItem(data)
  }

  useEffect(() => {
    getPostDetails(params.id)
  }, [])
  
  if(!item){
    return null
  }

  return(
    <div>
    <p>Post id: {item.id}</p>
    <p>Post title: {item.title}</p>
    <p>Post body: {item.body}</p>
    <Link to={`/posts/${params.id}/comments`}>View comments</Link>
    <hr />
  </div>
  )
}