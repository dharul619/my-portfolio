import React from "react";
import aboutPict from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-start justify-center h-full">
            <img src={aboutPict} className="rounded-2xl -my-6" alt="About Me" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-6 max-w-xl py6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
