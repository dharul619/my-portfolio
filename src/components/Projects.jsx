import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <motion.div
                className="w-full lg:w-1/4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
              </motion.div>
              <div className="w-full max-w-xl lg:w-3/4">
                <motion.h6
                  className="mb-2 font-semibold"
                  whileHover={{ color: "#a855f7" }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  initial={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {project.title}
                </motion.h6>
                <motion.p
                  className="mb-4 text-neutral-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
