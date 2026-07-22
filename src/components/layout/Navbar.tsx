"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Briefcase, Building2, CreditCard, BookOpen, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/companies", label: "Companies", icon: Building2 },
  { href: "/pricing", label: "Plans", icon: CreditCard },
  { href: "/blog", label: "Blog", icon: BookOpen },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setAuthOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-soft"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="md" showTagline />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "bg-brand-blue/5 text-brand-blue"
                  : "text-slate-600 hover:bg-slate-50 hover:text-brand-blue"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/recruiter"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-brand-orange transition-colors hover:bg-orange-50"
          >
            For Recruiters
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button
              onClick={() => setAuthOpen(!authOpen)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors"
            >
              Login
              <ChevronDown className={cn("h-4 w-4 transition-transform", authOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {authOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-slate-100 bg-white py-1.5 shadow-card"
                >
                  <Link
                    href="/auth/login"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-gray hover:text-brand-blue"
                  >
                    Candidate Login
                  </Link>
                  <Link
                    href="/auth/recruiter/login"
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-gray hover:text-brand-blue"
                  >
                    Recruiter Login
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Button href="/auth/signup" size="sm">
            Get Started
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-brand-gray"
                >
                  <link.icon className="h-4 w-4 text-brand-cyan" />
                  {link.label}
                </Link>
              ))}
              <Link
                href="/recruiter"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-brand-orange hover:bg-orange-50"
              >
                For Recruiters
              </Link>
              <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 mt-2">
                <Button href="/auth/login" variant="outline" className="w-full">
                  Candidate Login
                </Button>
                <Button href="/auth/signup" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}