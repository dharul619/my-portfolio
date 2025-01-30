import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";

function Contact() {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="my-10 text-center text-4xl"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Get in Touch
      </motion.h1>
      <motion.div
        className="text-center tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.p
          className="my-4"
          whileHover={{ scale: 1.05, color: "#a855f7" }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          className="my-4"
          whileHover={{ scale: 1.05, color: "#22d3ee" }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="mailto: dharulyuswansyah619@gmail.com"
          className="border-b"
          whileHover={{
            scale: 1.1,
            color: "#facc15",
            textDecoration: "underline",
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
