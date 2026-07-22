import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  href?: string;
  variant?: "default" | "light";
}

const sizes = {
  sm: { img: 40, text: "text-base", tag: "text-[8px]" },
  md: { img: 56, text: "text-xl", tag: "text-[10px]" },
  lg: { img: 72, text: "text-2xl", tag: "text-[11px]" },
};

export function Logo({
  className,
  size = "md",
  showTagline = false,
  href = "/",
  variant = "default",
}: LogoProps) {
  const s = sizes[size];

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt="JobCareerPao"
        width={s.img}
        height={s.img}
        className="object-contain shrink-0"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display font-bold tracking-tight", s.text)}>
          <span className={variant === "light" ? "text-white" : "text-brand-blue"}>Job</span>
          <span className={variant === "light" ? "text-brand-cyan" : "text-brand-cyan"}>Career</span>
          <span className="text-brand-orange">pao</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "font-medium tracking-wide mt-0.5",
              s.tag,
              variant === "light" ? "text-white/70" : "text-brand-slate"
            )}
          >
            Unlock Your Potential
          </span>
        )}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}