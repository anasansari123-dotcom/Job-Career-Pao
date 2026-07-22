"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { plans } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MembershipPlans() {
  return (
    <section className="relative overflow-hidden bg-brand-gray py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Membership"
          title="Choose Your Plan"
          description="Sign up first, then unlock applications with a plan that fits your ambition."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-3xl p-6 transition-all",
                plan.highlighted
                  ? "bg-gradient-to-b from-brand-blue to-[#0a3d6b] text-white shadow-card scale-[1.02]"
                  : "glass-strong hover:shadow-card"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-orange px-3 py-1 text-[11px] font-bold text-white shadow-soft">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </span>
              )}

              <h3
                className={cn(
                  "font-display text-xl font-bold",
                  plan.highlighted ? "text-white" : "text-brand-dark"
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm",
                  plan.highlighted ? "text-blue-100/80" : "text-brand-slate"
                )}
              >
                {plan.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className={cn(
                    "font-display text-4xl font-extrabold",
                    plan.highlighted ? "text-white" : "text-brand-blue"
                  )}
                >
                  {plan.price === 0 ? "₹0" : `₹${plan.price}`}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    plan.highlighted ? "text-blue-100/70" : "text-brand-slate"
                  )}
                >
                  /{plan.period}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.highlighted ? "text-brand-orange" : "text-brand-cyan"
                      )}
                    />
                    <span className={plan.highlighted ? "text-blue-50" : "text-slate-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href={`/auth/signup?plan=${plan.id}&redirect=/payment`}
                variant={plan.highlighted ? "orange" : "outline"}
                className={cn(
                  "mt-8 w-full",
                  !plan.highlighted && "border-brand-blue/30"
                )}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}