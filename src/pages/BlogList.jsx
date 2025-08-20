import { Link } from "react-router-dom";
import posts from "../data/posts";

export default function BlogList() {
  return (
    <div className="p">
      <h2>My Blog List</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.name}</p>
          <Link to={`/blog/${post.id}`} style={{textDecoration:"none"}}>Read More....</Link>
        </div>
      ))}
    </div>
  );
}
