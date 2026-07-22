import type { Metadata } from "next";
import { MembershipPlans } from "@/components/home/MembershipPlans";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Choose Free, Silver, Gold, or Platinum membership on JobCareerPao. Sign up before applying.",
};

export default function PricingPage() {
  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            Membership Plans
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-brand-slate">
            Users must sign up before applying. After signup you&apos;ll be guided to select a
            plan and complete secure payment.
          </p>
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-xs font-medium text-brand-slate">
            {["Browse Jobs", "Apply", "Signup", "OTP", "Select Plan", "Payment", "Apply Successfully"].map(
              (step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-brand-blue/5 px-3 py-1 text-brand-blue">
                    {step}
                  </span>
                  {i < arr.length - 1 && <span className="text-brand-cyan">→</span>}
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <MembershipPlans />
      <CTASection />
    </>
  );
}