"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell, AuthInput, AuthLink } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

export default function RecruiterSignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/auth/otp?email=${encodeURIComponent(form.email)}&redirect=/recruiter`);
  };

  return (
    <AuthShell
      title="Recruiter Signup"
      subtitle="Create your company account and start hiring."
      footer={
        <>
          Already registered? <AuthLink href="/auth/recruiter/login">Recruiter Login</AuthLink>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Your Name"
          required
          placeholder="Rahul Mehta"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <AuthInput
          label="Company Name"
          required
          placeholder="Acme Technologies"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <AuthInput
          label="Work Email"
          type="email"
          required
          placeholder="you@company.com"
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
        <Button type="submit" className="w-full" size="lg" variant="orange">
          Create Recruiter Account
        </Button>
      </form>
    </AuthShell>
  );
}