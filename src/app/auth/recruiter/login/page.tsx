"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell, AuthInput, AuthLink } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

export default function RecruiterLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/recruiter");
  };

  return (
    <AuthShell
      title="Recruiter Login"
      subtitle="Access your hiring dashboard and manage applicants."
      footer={
        <>
          New recruiter? <AuthLink href="/auth/recruiter/signup">Create company account</AuthLink>
          <br />
          <span className="mt-2 inline-block">
            Looking for a job? <AuthLink href="/auth/login">Candidate Login</AuthLink>
          </span>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Work Email"
          type="email"
          required
          placeholder="you@company.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <AuthInput
          label="Password"
          type="password"
          required
          placeholder="Your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <div className="flex justify-end">
          <AuthLink href="/auth/forgot-password">Forgot password?</AuthLink>
        </div>
        <Button type="submit" className="w-full" size="lg" variant="orange">
          Login as Recruiter
        </Button>
      </form>
    </AuthShell>
  );
}