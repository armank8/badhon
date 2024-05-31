import { motion, useScroll } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function TopBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="bg-black flex justify-between text-white px-20 h-9 items-center">
      <div>Login/Register</div>
      <p className="text-primary font-bold">
        See 20 Years Journey of Badhon Bagerhat,Bangladesh
      </p>
      <div className="flex gap-2">
        <p>Follow Us On : </p>
        <div className="flex items-center gap-1">
          <FaFacebook></FaFacebook>
          <FaYoutube></FaYoutube>
        </div>
      </div>
    </motion.div>
  );
}
