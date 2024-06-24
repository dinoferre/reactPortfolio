import profilePic from "../assets/perfil.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 initial={{opacity: 0, x:-100}} animate={{opacity: 1, x:0}} transition={{duration: 0.5, delay: 0.5}} className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-center lg:text-left">Dino Ferré</motion.h1>
                        <motion.span initial={{opacity: 0, x:-100}} animate={{opacity: 1, x:0}} transition={{duration: 0.5, delay: 1}} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent text-center lg:text-left">Full Stack & Game Developer</motion.span>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                    <motion.img initial={{opacity: 0, x:100}} animate={{opacity: 1, x:0}} transition={{duration: 1, delay: 1.2}} src={profilePic} alt="Dino Ferré" className="rounded-2xl w-64 lg:w-80 h-auto"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;