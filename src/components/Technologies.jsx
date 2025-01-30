import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
import excell from "../assets/Icons/excell.svg";
import java from "../assets/Icons/java.svg";
import python from "../assets/Icons/python.svg";
import { animate, easeIn, motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={excell} alt="Microsoft Excel" className="w-16 h-16" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={java} alt="Microsoft Excel" className="w-16 h-16" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={python} alt="Microsoft Excel" className="w-16 h-16" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
