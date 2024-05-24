export default function Post({ post }) {
  return (
    <div className=" border-b-2 hover:border-primary ">
      <div className="card  glass shadow-none    ">
        <figure>
          <img src={post.image} alt="car!" />
        </figure>
        <div className="card-body p-0 py-10 font-bold text-black ">
          <h2 className="card-title">{post.name}</h2>
        </div>
      </div>
    </div>
  );
}
