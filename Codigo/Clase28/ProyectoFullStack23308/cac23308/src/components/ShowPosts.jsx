import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// llamamos al endpoint (nuestra API en el hots local puesto 8000)
const url = "http://localhost:8000/posts/";

const ShowPosts = () => {
  // estados
  const [posts, setPosts] = useState([]);

  //el procedimiento que trae todos los posts
  const getPosts = async () => {
    const res = await axios.get(url);
    setPosts(res.data);
  };

  // procedimiento para eliminar un post
  const deletePost = async (id) => {
    await axios.delete(`${url}${id}`);
    getPosts()
  };
  // utilizamos useEffect para traer los posts (cuando se acopla el componente)
  useEffect(() => {
    getPosts();
  }, []);

  //

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <small>Create Post</small>
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            <i class="fa-regular fa-plus"></i>
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <Link to= {`edit/${post.id}`} className="btn btn-info"><i className="fa fa-edit"></i></Link>
                    <button onClick={()=>deletePost(post.id)} className="btn btn-danger"><i className="fa fa-trash"></i></button>
                  </td>
                </tr>
             ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ShowPosts;
