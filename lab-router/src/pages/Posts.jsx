import { fetchPosts } from "../api";
import { useEffect, useState } from 'react'
import PostItem from "../components/PostItem";

export default function PostsPage(){
  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    const { data } = await fetchPosts();
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const PostsList = posts.map(post => <PostItem key={post.id} item={post}/>) 
  
  return (
    <div>
      Posts
      {PostsList}
    </div>
  )
}