"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-brand-cyan/20 blur-2xl animate-pulse-soft" />
            <Image
              src="/logo.png"
              alt="JobCareerPao"
              width={96}
              height={96}
              className="relative z-10 object-contain"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 font-display text-xl font-bold"
          >
            <span className="text-brand-blue">Job</span>
            <span className="text-brand-cyan">Career</span>
            <span className="text-brand-orange">pao</span>
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 h-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}