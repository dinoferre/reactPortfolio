import { ABOUT_TEXT } from "../constants";
import CV from "../assets/CV_Dino_Ferre.pdf";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="my-10 text-center text-4xl font-thin tracking-tight"
            >
                Sobre Mi
            </motion.h2>
            <div className="flex flex-wrap justify-center items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-center">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="flex justify-center"
            >
                <motion.a
                    href={CV}
                    download="Dino_Ferre_CV.pdf"
                    whileHover={{ x: -10 }}
                >
                    <motion.button
                        whileHover={{ x: -10 }}
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:from-pink-400 hover:via-slate-600 hover:to-purple-600 text-white py-2 px-4 rounded"
                    >
                        Descargar Curriculum
                    </motion.button>
                </motion.a>
            </motion.div>
        </div>
    );
}

export default About;