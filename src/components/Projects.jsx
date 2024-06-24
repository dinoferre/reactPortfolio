import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-thin tracking-tight"
      >
        Proyectos
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="relative mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={275}
                height={275}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 flex flex-col justify-center"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 font-light tracking-tighter">{project.description}</p>
              <div className="flex items-center mb-4">
                <div className="flex flex-wrap mr-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 rounded font-light tracking-tighter bg-neutral-900 px-2 py-1 text-sm text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 -mt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white" size={30} />
                  </a>
                  <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                    <RiComputerLine className="text-white" size={30} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center mt-8"
      >
        <motion.a
          href="https://github.com/dinoferre?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: -10 }}
        >
          <motion.button
            whileHover={{ x: -10 }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:from-pink-400 hover:via-slate-600 hover:to-purple-600 text-white py-2 px-4 rounded"
          >
            Ver Más Proyectos
          </motion.button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;