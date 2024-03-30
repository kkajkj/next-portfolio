"use client";
import TestimonialCard from "@/components/TestimonialCard";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StateContext } from "../../../StateContext";
export default function TestimonialPage() {
  const data = useContext(StateContext);
  const testimonials = data.testimonials;
  const enabledData = testimonials.filter((test) => test.enabled);
  // const projectDetail = projects?.[0];
  return (
    <>
      {enabledData && (
        <motion.div
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="flex overflow-x-hidden">
            <TestimonialCard testimonials={testimonials} />
          </div>
        </motion.div>
      )}
    </>
  );
}
