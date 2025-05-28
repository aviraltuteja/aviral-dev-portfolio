"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "aviraltuteja@gmail.com";
  const resumeLink =
    "https://drive.google.com/file/d/1PTN3Gno-ueNVDeiTq091FEz8It_Vz0mq/view?usp=sharing";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#e9e9e9] flex flex-col items-center justify-center p-6 text-[#111111]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6">
        👋 I am open to Software Development Roles!
      </motion.h1>

      {/* Social Icons */}
      <div className="flex gap-8 text-4xl mb-8">
        <Link
          href="https://github.com/aviraltuteja"
          target="_blank"
          aria-label="Github">
          <FaGithub className="hover:text-[#305A7F] transition" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aviral-tuteja/"
          target="_blank"
          aria-label="LinkedIn">
          <FaLinkedin className="hover:text-[#305A7F] transition" />
        </Link>
        <Link
          href="https://instagram.com/lankapati_ra.one"
          target="_blank"
          aria-label="Instagram">
          <FaInstagram className="hover:text-[#305A7F] transition" />
        </Link>
      </div>

      {/* Email Copy Component */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCopy}
        className="cursor-pointer bg-[#D9D9D9] px-6 py-3 rounded-xl text-lg font-medium mb-6 shadow-lg">
        {email}
        {copied && <span className="ml-2 text-[#00cc00]">✓</span>}
      </motion.div>

      {/* Resume Link */}
      <Link
        href={resumeLink}
        target="_blank"
        className="text-[#5ED5AF] hover:underline text-lg font-medium">
        View My Resume
      </Link>
    </main>
  );
}
