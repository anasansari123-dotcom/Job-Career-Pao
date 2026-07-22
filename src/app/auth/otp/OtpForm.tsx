"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthShell, AuthLink } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

export default function OtpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";
  const plan = searchParams.get("plan") || "";
  const redirect = searchParams.get("redirect") || "/pricing";
  const job = searchParams.get("job") || "";
  const isReset = searchParams.get("reset") === "1";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    setError("");
    if (value && index < 5) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join("").length < 6) {
      setError("Please enter the 6-digit OTP");
      return;
    }
    if (isReset) {
      router.push("/auth/login");
      return;
    }
    const params = new URLSearchParams();
    if (plan) params.set("plan", plan);
    if (job) params.set("job", job);
    const dest = redirect.startsWith("/") ? redirect : "/pricing";
    router.push(`${dest}${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <AuthShell
      title="OTP Verification"
      subtitle={`Enter the 6-digit code sent to ${email}`}
      footer={
        <>
          Didn&apos;t receive it?{" "}
          <button type="button" className="font-semibold text-brand-cyan hover:text-brand-blue">
            Resend OTP
          </button>
          <br />
          <span className="mt-2 inline-block">
            <AuthLink href="/auth/signup">Change email</AuthLink>
          </span>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-2 sm:gap-3">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="h-12 w-10 rounded-xl border border-slate-200 bg-white text-center font-display text-lg font-bold text-brand-blue sm:h-14 sm:w-12"
            />
          ))}
        </div>
        {error && <p className="text-center text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full" size="lg">
          Verify & Continue
        </Button>
        <p className="text-center text-xs text-brand-slate">
          Demo tip: enter any 6 digits to continue
        </p>
      </form>
    </AuthShell>
  );
}