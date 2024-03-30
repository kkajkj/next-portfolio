"use client";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/Contactform";
import { userData } from "@/utils/api";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function ContactPage() {
  const text = "Hello User";
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-10 lg:px-15 xl:px-20">
        {/* textcontainer */}
        <div className=" h-1/2 lg:h-full lg:w-1/2 flex  items-center justify-center text-6xl text-red-400">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        <ContactForm />
      </div>
      <ContactDetails />
    </motion.div>
  );
}
