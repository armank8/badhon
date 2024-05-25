export default function BlogCard({ post }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={post.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.name}</h2>
        <p>{post.desc.slice(0,50)}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}
