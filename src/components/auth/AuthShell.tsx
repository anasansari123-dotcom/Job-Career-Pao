"use client";

import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

interface AuthShellProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  footer?: React.ReactNode;
}

export function AuthShell({ children, title, subtitle, footer }: AuthShellProps) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-brand-gray py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-md px-4">
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo size="md" showTagline href="/" />
          <h1 className="mt-6 font-display text-2xl font-bold text-brand-dark">{title}</h1>
          <p className="mt-2 text-sm text-brand-slate">{subtitle}</p>
        </div>

        <div className="glass-strong rounded-3xl p-6 sm:p-8">{children}</div>

        {footer && <div className="mt-6 text-center text-sm text-brand-slate">{footer}</div>}
      </div>
    </div>
  );
}

export function AuthInput({
  label,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  name,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-brand-dark">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400"
      />
    </div>
  );
}

export function AuthDivider({ text = "or continue with" }: { text?: string }) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200" />
      </div>
      <div className="relative flex justify-center text-xs">
        <span className="bg-white px-3 text-brand-slate">{text}</span>
      </div>
    </div>
  );
}

export function AuthLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-brand-cyan hover:text-brand-blue">
      {children}
    </Link>
  );
}