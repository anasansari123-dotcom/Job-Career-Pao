"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Zap,
  FileEdit,
  Compass,
  MessageCircle,
  Headphones,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [ShieldCheck, Lock, Zap, FileEdit, Compass, MessageCircle, Headphones];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why JobCareerPao"
          title="Why Choose Us"
          description="Everything you need for a safe, fast, and successful career journey."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass-strong group rounded-2xl p-6"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/20 text-brand-blue transition group-hover:from-brand-blue group-hover:to-brand-cyan group-hover:text-white"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="mt-4 font-display text-base font-semibold text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}