import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl font-thin tracking-tight"
      >
        Contacto
      </motion.h2>
      <div className="text-center tracking-tighter">
        <Navbar />
      </div>
      <div className="flex justify-center items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="text-1xl flex items-center"
        >
          <motion.span
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-1xl tracking-tight text-transparent"
          >
            Dino Ferré
          </motion.span>
          |(2024) &#169;
          <motion.span
            className="ml-2 cursor-pointer"
            whileHover={{ y: -2 }}
            onClick={scrollToTop}
          >
            <FaArrowUp className="text-purple-500 text-xl" />
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;