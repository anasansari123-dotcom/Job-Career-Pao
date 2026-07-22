"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, CreditCard, Lock, ShieldCheck } from "lucide-react";
import { plans } from "@/lib/data";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function PaymentContent() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "gold";
  const job = searchParams.get("job") || "";

  const [selected, setSelected] = useState(initialPlan);
  const [step, setStep] = useState<"plan" | "pay" | "success">("plan");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [processing, setProcessing] = useState(false);

  const plan = plans.find((p) => p.id === selected) || plans[2];

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (plan.price === 0) {
      setStep("success");
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep("success");
    }, 1600);
  };

  if (step === "success") {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-strong rounded-3xl p-8"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="mt-5 font-display text-2xl font-bold text-brand-dark">
            Membership Activated!
          </h1>
          <p className="mt-2 text-sm text-brand-slate">
            Your <span className="font-semibold text-brand-blue">{plan.name}</span> plan is now
            active. You can apply to jobs successfully.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Button
              href={job ? `/jobs` : "/jobs"}
              size="lg"
              variant="orange"
            >
              {job ? "Continue Applying" : "Browse Jobs & Apply"}
            </Button>
            <Button href="/" variant="outline">
              Go to Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <Logo size="sm" showTagline />
        <h1 className="mt-5 font-display text-3xl font-bold text-brand-dark">
          {step === "plan" ? "Select Membership Plan" : "Secure Payment"}
        </h1>
        <p className="mt-2 text-sm text-brand-slate">
          {step === "plan"
            ? "Choose a plan to unlock applications and career tools."
            : "Complete payment to activate your membership."}
        </p>
      </div>

      {step === "plan" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p.id)}
              className={cn(
                "rounded-2xl border-2 p-5 text-left transition",
                selected === p.id
                  ? "border-brand-orange bg-orange-50/50 shadow-soft"
                  : "border-slate-200 bg-white hover:border-brand-cyan"
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-brand-dark">{p.name}</h3>
                {selected === p.id && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-white">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </div>
              <p className="mt-2 font-display text-2xl font-extrabold text-brand-blue">
                {p.price === 0 ? "Free" : `₹${p.price}`}
                {p.price > 0 && (
                  <span className="text-sm font-normal text-brand-slate">/{p.period}</span>
                )}
              </p>
              <ul className="mt-3 space-y-1.5">
                {p.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-brand-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      )}

      {step === "plan" && (
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            onClick={() => (plan.price === 0 ? setStep("success") : setStep("pay"))}
          >
            {plan.price === 0 ? "Activate Free Plan" : `Continue with ${plan.name}`}
          </Button>
        </div>
      )}

      {step === "pay" && (
        <div className="mx-auto grid max-w-3xl gap-6 lg:grid-cols-5">
          <div className="glass-strong rounded-2xl p-6 lg:col-span-2">
            <h2 className="font-display font-semibold text-brand-dark">Order Summary</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-brand-slate">{plan.name} Plan</span>
                <span className="font-semibold">₹{plan.price}</span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-3">
                <span className="font-semibold text-brand-dark">Total</span>
                <span className="font-display text-lg font-bold text-brand-blue">
                  ₹{plan.price}
                </span>
              </div>
            </div>
            <div className="mt-6 space-y-2 text-xs text-brand-slate">
              <p className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-brand-cyan" />
                256-bit SSL encrypted
              </p>
              <p className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" />
                Secure payment gateway
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStep("plan")}
              className="mt-4 text-sm font-medium text-brand-cyan hover:text-brand-blue"
            >
              ← Change plan
            </button>
          </div>

          <form onSubmit={handlePay} className="glass-strong rounded-2xl p-6 lg:col-span-3">
            <div className="mb-5 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-brand-blue" />
              <h2 className="font-display font-semibold text-brand-dark">Card Details</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Card Number</label>
                <input
                  required
                  placeholder="4242 4242 4242 4242"
                  value={card.number}
                  onChange={(e) => setCard({ ...card, number: e.target.value })}
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Cardholder Name</label>
                <input
                  required
                  placeholder="Name on card"
                  value={card.name}
                  onChange={(e) => setCard({ ...card, name: e.target.value })}
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Expiry</label>
                  <input
                    required
                    placeholder="MM/YY"
                    value={card.expiry}
                    onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">CVV</label>
                  <input
                    required
                    placeholder="123"
                    type="password"
                    maxLength={4}
                    value={card.cvv}
                    onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={processing}>
                {processing ? "Processing…" : `Pay ₹${plan.price}`}
              </Button>
              <p className="text-center text-xs text-brand-slate">
                Frontend demo only — no real charges are made.
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-brand-gray">
      <Suspense fallback={<div className="py-20 text-center">Loading payment…</div>}>
        <PaymentContent />
      </Suspense>
    </div>
  );
}