import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BlogPost() {
  const { id } = useParams();
  const post = useSelector(state =>
    state.posts.find(p => p.id === Number(id))
  );
  if (!post) {
    return <h2>Post not found</h2>;
  }
  return (
    <div className="p">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
