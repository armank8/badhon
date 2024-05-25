import { Link } from "react-router-dom";

export default function Explore() {
    // const [active,setActive] = 
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
            <button className="px-6 py-2  hover:border-b-2 border-primary active:border-primary">All</button>
            <button className="px-6 py-2  hover:border-b-2 border-primary active:border-primary">News</button>
            <button className="px-6 py-2  hover:border-b-2 border-primary active:border-primary">Blogs</button>
        </div>

      </div>
    </div>
  );
}
