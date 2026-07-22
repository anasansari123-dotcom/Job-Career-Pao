import { Suspense } from "react";
import type { Metadata } from "next";
import OtpForm from "./OtpForm";

export const metadata: Metadata = {
  title: "OTP Verification",
};

export default function OtpPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
      <OtpForm />
    </Suspense>
  );
}