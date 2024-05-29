import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <Link to={`/${post.name}`}>
      <div className="card card-compact bg-base-100 shadow-xl relative">
        <figure>
          <img src={post.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="absolute top-0 left-0 text-xl text-white font-bold bg-black px-4 py-1 rounded">
            {post.category}
          </div>
          <h2 className="card-title">{post.name}</h2>
          <p>{post.desc.slice(0, 50)}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
