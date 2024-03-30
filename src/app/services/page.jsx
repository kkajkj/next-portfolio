"use client";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StateContext } from "../../../StateContext";
export default function Services() {
  const data = useContext(StateContext);
  const services = data.services;
  const filteredServices = services?.filter((service) => service.enabled);
  return (
    <>
      {filteredServices && (
        <motion.div
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className=" container mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">My Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredServices?.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
