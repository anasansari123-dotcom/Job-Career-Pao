"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-brand-gray min-h-screen">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">Contact</h1>
          <p className="mt-2 text-brand-slate">We&apos;d love to hear from you.</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "support@jobcareerpao.com" },
            { icon: Phone, label: "Phone", value: "+91 1800-123-4567" },
            { icon: MapPin, label: "Office", value: "Bengaluru, Karnataka, India" },
          ].map((item) => (
            <div key={item.label} className="glass-strong flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">
                  {item.label}
                </p>
                <p className="font-medium text-brand-dark">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-strong rounded-2xl p-6 sm:p-8">
          {sent ? (
            <p className="py-8 text-center text-brand-blue font-medium">
              Thanks! We&apos;ll get back to you within 24 hours.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium">Name</label>
                <input required className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}