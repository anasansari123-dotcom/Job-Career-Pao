"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell, AuthInput, AuthLink } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => router.push(`/auth/otp?email=${encodeURIComponent(email)}&reset=1`), 1200);
  };

  return (
    <AuthShell
      title="Forgot Password"
      subtitle="Enter your email and we'll send a verification OTP."
      footer={
        <>
          Remembered it? <AuthLink href="/auth/login">Back to Login</AuthLink>
        </>
      }
    >
      {sent ? (
        <p className="rounded-xl bg-brand-cyan/10 px-4 py-3 text-center text-sm text-brand-blue">
          OTP sent to {email}. Redirecting…
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput
            label="Email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="w-full" size="lg">
            Send OTP
          </Button>
        </form>
      )}
    </AuthShell>
  );
}