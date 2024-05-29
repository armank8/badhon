import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blog_posts } from "../../constants/Blogs";
import BlogCard from "./BlogCard";
import "animate.css";
import { motion } from "framer-motion";

export default function Explore() {
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    
  }, [activeButton]);
  // console.log(activeButton);
  const blogs = blog_posts.filter((blog) =>
    activeButton === "all" ? blog : blog.category.includes(activeButton)
  );
  return (
    <div className="max-w-7xl mx-auto my-28">
      {/* titloe */}
      <div className="flex items-center">
        <div className="w-[6px] h-16 bg-primary mr-4"></div>
        <h1 className="text-5xl font-medium text-black">Explore</h1>
      </div>
      {/* tabs */}

      <div className="">
        <div className="blogs_menus flex justify-start gap-6 border-b-2">
          <button
            className={`px-6 py-2  hover:border-b-2 border-primary active:border-primary ${
              activeButton === "all" ? "border-b-2" : ""
            }`}
            onClick={() => handleButtonClick("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2  hover:border-b-2 border-primary active:border-primary ${
              activeButton === "news" ? "border-b-2" : ""
            }`}
            onClick={() => handleButtonClick("news")}
          >
            News
          </button>
          <button
            className={`px-6 py-2  hover:border-b-2 border-primary active:border-primary ${
              activeButton === "blogs" ? "border-b-2" : ""
            }`}
            onClick={() => handleButtonClick("blogs")}
          >
            Blogs
          </button>
        </div>
        {/* Blogs body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="blogs_body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 animate__slideInUp"
        >
          {blogs.map((post) => (
            <BlogCard key={post._id} post={post}></BlogCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
