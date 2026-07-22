"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-[#0c5a9e] to-brand-cyan" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-orange/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start Your Career Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-blue-100/90 sm:text-lg">
            Join thousands of professionals who found their dream roles on JobCareerPao.
            Unlock Your Potential.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/auth/signup" variant="orange" size="lg">
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/jobs"
              size="lg"
              className="border-2 border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-brand-blue"
            >
              <Search className="h-4 w-4" />
              Browse Jobs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}