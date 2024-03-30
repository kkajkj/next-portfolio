"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/services", title: "Services" },
    { url: "/skills", title: "Skills" },
    { url: "/education", title: "Education" },
    { url: "/experience", title: "Experience" },
    { url: "/projects", title: "Projects" },
    { url: "/testimonial", title: "Testimonial" },
    { url: "/contact", title: "Contact" },
  ];
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden  w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-lg p-1 font-semibold"
        >
          <span className="text-white ">
            <em>Portfolyo</em>
          </span>
        </Link>
      </div>

      {/* ResponsiveMenu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex  flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            className="w-10 h-1 bg-black rounded origin-left"
            variants={topVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded"
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-black rounded origin-left"
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>
        {/* MenuList */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link, index) => (
              <motion.div variants={listItemVariants}>
                <Link href={link.url} key={index}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
