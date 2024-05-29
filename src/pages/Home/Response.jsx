import { Link } from "react-router-dom";
import emergency from "../../assets/img/emergency.png";
import { motion } from "framer-motion";
export default function Response() {
  return (
    <section className="text-gray-600">
      <div className=" flex  py-24 md:flex-row flex-col items-center">
        {/* left image */}
        <div className="lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <motion.img
            initial={{ x: 600 }}
            whileInView={{ x: 0}}
            transition={{duration:1}}
            className="object-cover object-center"
            alt="hero"
            src={emergency}
          />
        </div>
        {/* right part */}
        <div className="lg:flex-grow md:w-1/2  md:pl-16 flex flex-col md:items-start   lg:mr-80">
          <div className="flex items-center">
            <div className="w-[6px] h-16 bg-primary mr-4"></div>
            <h1 className="text-5xl font-medium text-black">
              Rohingya Response
            </h1>
          </div>
          <p className="my-6 leading-relaxed">
            The virtues of Humanitarian Response include faith, courage,
            insistence, love and compassion. In humanitarian response, ActionAid
            always puts emphasis on ensuring accountability and transparency and
            it should not be the one way rather both way communication needed so
            that community can hold us to account
          </p>

          <button className="text-primary font-bold bg-none border-0 focus:bg-none text-lg">
            <Link to="/rohingya-response">Read More</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
