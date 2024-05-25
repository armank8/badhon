import { useState } from "react";
import { Link } from "react-router-dom";

export default function Explore() {
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (buttonName) => {
    console.log(activeButton);
    setActiveButton(buttonName);
  };
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
      </div>
    </div>
  );
}
