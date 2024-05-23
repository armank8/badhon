import a from "../../assets/img/a.jpg";
import b from "../../assets/img/b.jpeg";
export default function Banner() {
  return (
    <div className="bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 text-white py-10 ">
      <div>
        <img src={a} alt="" />
        <button className="btn btn-primary mt-12 text-white px-10">Visit Now</button>
      </div>
      <div>
        <img src={b} alt="" />
        <button className="btn btn-primary mt-12 text-white px-10">Read More</button>
      </div>
    </div>
    </div>
  );
}
