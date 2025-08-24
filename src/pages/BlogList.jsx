import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, addPost, updatePost } from "../redux/posts";
import { useState } from "react";


export default function BlogList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updatePost({ id: editingId, title, content }));
      setEditingId(null);
    } else {
      dispatch(
        addPost({
          id: posts.length + 1,
          title,
          content,
        })
      );
    }
    setTitle("");
    setContent("");
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
  };

  return (
    <div className="p">
      <h2>My Blog List</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">{editingId ? "Update Post" : "Add Post"}</button>
      </form>

      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <Link
            to={`/blog/${post.id}`}
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            Read More...
          </Link>
          <div>
          <button onClick={() => handleEdit(post)}>Edit</button>
          <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
