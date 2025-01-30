import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATES } from "../constants";

function Certificates() {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Certificates
      </motion.h1>
      <div>
        {CERTIFICATES.map((certificate, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-full lg:w-1/4">
              <motion.img
                src={certificate.icon}
                alt={certificate.provider}
                width={150}
                height={150}
                className="mb-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.h6
                  className="mb-2 font-semibold hover:text-purple-500"
                  whileHover={{ color: "#a855f7" }}
                >
                  {certificate.title}{" "}
                  <span className="text-sm text-cyan-400">
                    ({certificate.count} certificate
                    {certificate.count > 1 ? "s" : ""})
                  </span>
                </motion.h6>
              </a>
              <motion.p
                className="mb-4 text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {certificate.description}
              </motion.p>
              <motion.p
                className="text-sm text-neutral-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                {certificate.provider} - {certificate.date}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Certificates;
