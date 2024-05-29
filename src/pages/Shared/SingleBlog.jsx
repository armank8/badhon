import { useParams } from "react-router-dom";
import { blog_posts } from "../../constants/Blogs";

export default function SingleBlog() {
  const { name } = useParams();
  console.log(name);

  const singlePost = blog_posts.filter((post) => post.name === name);
  console.log(singlePost);

  return (
    <div className="relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${singlePost[0].image})`,
        }}
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-48 p-5 sm:p-10">

            <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
              {singlePost[0].name}
            </h1>
            <p className="text-gray-700 text-xs mt-2">Written By: <span className="font-bold text-primary">Badhon NGO</span>  </p>
            <p className="text-base leading-8 my-5">
              {singlePost[0].desc}
              {singlePost[0].desc}
              {singlePost[0].desc}
              {singlePost[0].desc}
              {singlePost[0].desc}
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
