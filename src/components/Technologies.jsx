import { FaHtml5, FaPython, FaJava, FaNodeJs, FaGithub, FaUnity, FaAngular } from "react-icons/fa";
import { IoLogoCss3, IoLogoNpm } from "react-icons/io";
import { SiJavascript, SiTypescript, SiMysql, SiBlender } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconsVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity: 1, y:0}}
                  initial={{opacity: 0, y:100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl font-thin tracking-tight">Tecnologías</motion.h2>
      <motion.div whileInView={{opacity: 1, x:0}}
                  initial={{opacity: 0, x:-30}} transition={{duration: 1.5}} className="flex flex-wrap justify-center gap-4">
        {/* Primer fila */}
        <div className="flex justify-center flex-wrap gap-4 mb-4">
          <motion.div variants={iconsVariant(2.5)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-5xl text-orange-500" />
          </motion.div>
          <motion.div variants={iconsVariant(3)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoCss3 className="text-5xl text-blue-500" />
          </motion.div>
          <motion.div variants={iconsVariant(5)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-5xl text-yellow-500" />
          </motion.div>
          <motion.div variants={iconsVariant(6)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className="text-5xl text-sky-500" />
          </motion.div>
          <motion.div variants={iconsVariant(4)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-5xl" />
          </motion.div>
          <motion.div variants={iconsVariant(3)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </motion.div>
          <motion.div variants={iconsVariant(2)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAngular className="text-5xl text-red-700" />
          </motion.div>
        </div>

        {/* Segunda fila */}
        <div className="flex justify-center flex-wrap gap-4 mb-4">
          <motion.div variants={iconsVariant(3)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-5xl text-blue-700" />
          </motion.div>
          <motion.div variants={iconsVariant(5)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-5xl text-green-500" />
          </motion.div>
          <motion.div variants={iconsVariant(4)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-5xl text-orange-600" />
          </motion.div>
          <motion.div variants={iconsVariant(3)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-5xl text-gray-400" />
          </motion.div>
          <motion.div variants={iconsVariant(7)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiBlender className="text-5xl text-orange-600" />
          </motion.div>
          <motion.div variants={iconsVariant(6)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaUnity className="text-5xl text-gray-400" />
          </motion.div>
          <motion.div variants={iconsVariant(3)}
            initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoNpm className="text-5xl text-red-500" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;