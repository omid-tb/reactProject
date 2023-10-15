import axios from "axios";
import React from "react";

const url = "https://jsonplaceholder.typicode.com";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${url}/posts`).then((response) => {
      setPost(response.data);
    });
  }, []);



 
  const createPost=(id)=> {
    setPost(id);
    axios
      .post(`${url}/users/${id}`, {
        "id": id
    })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}