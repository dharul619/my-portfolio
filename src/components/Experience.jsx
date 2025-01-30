import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

function Experience() {
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
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
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
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full lg:w-1/4">
              <motion.p
                className="mb-2 text-sm text-neutral-400"
                whileHover={{ color: "#a855f7" }}
              >
                {experience.year}
              </motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <motion.span
                  className="text-sm text-purple-100"
                  whileHover={{ color: "#facc15" }}
                >
                  {experience.company}
                </motion.span>
              </h6>
              <motion.p
                className="mb-4 text-neutral-400"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                {experience.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
