import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function TopBar() {
  
  return (
    <motion.div className="bg-black flex flex-col  md:flex-row md:justify-between text-white px-20  items-center">
      <div>Login/Register</div>
      <p className="text-primary font-bold text-center">
        See 20 Years Journey of Badhon Bagerhat,Bangladesh
      </p>
      <div className="flex flex-col items-center lg:flex-row gap-2">
        <p>Follow Us On : </p>
        <div className="flex items-center gap-1">
          <FaFacebook></FaFacebook>
          <FaYoutube></FaYoutube>
        </div>
      </div>
    </motion.div>
  );
}
