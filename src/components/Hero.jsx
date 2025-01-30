import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilPic from "../assets/profile2.png";
import { motion, AnimatePresence } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const roleVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

function Hero() {
  const roles = [
    "Intern Web Developer",
    "Intern Data Analyst",
    "Administrator",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // Berganti setiap 3 detik
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap lg:justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-14 lg:text-6xl"
            >
              Dharul Yuswansyah
            </motion.h1>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                variants={roleVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Bagian Gambar */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilPic}
              alt="Dharul Yuswansyah"
              className=" max-w-xs lg:max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
