"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell, AuthInput, AuthLink } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

export default function CandidateLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/jobs");
  };

  return (
    <AuthShell
      title="Candidate Login"
      subtitle="Welcome back — continue your career journey."
      footer={
        <>
          New here? <AuthLink href="/auth/signup">Create an account</AuthLink>
          <br />
          <span className="mt-2 inline-block">
            Recruiter? <AuthLink href="/auth/recruiter/login">Recruiter Login</AuthLink>
          </span>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          required
          placeholder="you@email.com"
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
        <Button type="submit" className="w-full" size="lg">
          Login
        </Button>
      </form>
    </AuthShell>
  );
}