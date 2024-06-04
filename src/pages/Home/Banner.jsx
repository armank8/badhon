import b from "../../assets/img/b.jpeg";
export default function Banner() {
  return (
    <div className="bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 text-white py-10 ">
        <div className="flex flex-col items-center">
          {/* <img src={a} alt="" /> */}
          <div className="w-full bg-primary h-[437px] flex justify-center items-center">
            <div className="flex flex-col">
              <span className="text-7xl font-black">20</span>
              <span>Years of</span>
              <span className="text-3xl font-black">Badhon NGO</span>
              <span className="text-xl">Bagerhat,Bangladesh.</span>
            </div>
          </div>
          <button className="btn btn-primary mt-12 text-white px-10 max-w-40">
            Visit Now
          </button>
        </div>
        <div>
          <img src={b} alt="" />
          <div className="flex flex-col items-center">
          <button className="btn btn-primary mt-12 text-white px-10 max-w-40">
            Read More
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
