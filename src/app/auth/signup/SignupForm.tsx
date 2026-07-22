"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthShell, AuthInput, AuthDivider, AuthLink } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

export default function CandidateSignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "";
  const redirect = searchParams.get("redirect") || "/pricing";
  const job = searchParams.get("job") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("email", form.email);
    if (plan) params.set("plan", plan);
    if (redirect) params.set("redirect", redirect);
    if (job) params.set("job", job);
    router.push(`/auth/otp?${params.toString()}`);
  };

  return (
    <AuthShell
      title="Create Candidate Account"
      subtitle="Join JobCareerPao and unlock verified opportunities."
      footer={
        <>
          Already have an account? <AuthLink href="/auth/login">Login</AuthLink>
          <br />
          <span className="mt-2 inline-block">
            Hiring talent? <AuthLink href="/auth/recruiter/signup">Recruiter Signup</AuthLink>
          </span>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Full Name"
          required
          placeholder="Priya Sharma"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <AuthInput
          label="Email"
          type="email"
          required
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <AuthInput
          label="Phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <AuthInput
          label="Password"
          type="password"
          required
          placeholder="Min. 8 characters"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <label className="flex items-start gap-2 text-xs text-brand-slate">
          <input type="checkbox" required className="mt-0.5 rounded border-slate-300" />
          I agree to the{" "}
          <AuthLink href="/terms">Terms</AuthLink> and{" "}
          <AuthLink href="/privacy">Privacy Policy</AuthLink>
        </label>
        <Button type="submit" className="w-full" size="lg">
          Create Account
        </Button>
      </form>
      <AuthDivider />
      <Button href="/auth/login" variant="outline" className="w-full">
        Sign in instead
      </Button>
    </AuthShell>
  );
}