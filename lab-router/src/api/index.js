import axios from 'axios';

export const fetchPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts')

export const fetchPostDetails = id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

export const fetchPostComments = id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)