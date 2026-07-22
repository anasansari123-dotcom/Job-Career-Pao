import type { Metadata } from "next";
import {
  Building2,
  Megaphone,
  Users,
  UserSearch,
  CalendarCheck,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Recruiter Portal",
  description: "Hire top talent with JobCareerPao's recruiter portal.",
};

const capabilities = [
  {
    icon: Building2,
    title: "Create Company",
    desc: "Build a branded company page that attracts the right candidates.",
  },
  {
    icon: Megaphone,
    title: "Post Jobs",
    desc: "Publish openings with rich descriptions and reach verified talent.",
  },
  {
    icon: Users,
    title: "Manage Applicants",
    desc: "Track every stage of your hiring pipeline in one dashboard.",
  },
  {
    icon: UserSearch,
    title: "View Candidates",
    desc: "Search and shortlist candidates matched to your requirements.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Interviews",
    desc: "Coordinate interviews and send invites without leaving the portal.",
  },
  {
    icon: BarChart3,
    title: "Hiring Insights",
    desc: "See application trends and time-to-hire metrics at a glance.",
  },
];

export default function RecruiterPortalPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-[#0c5a9e] to-brand-cyan" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-orange/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Recruiter Portal
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Hire India&apos;s Best Talent
            </h1>
            <p className="mt-4 text-lg text-blue-100/90">
              Create your company, post jobs, manage applicants, view candidates, and schedule
              interviews — all from one premium hiring workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/auth/recruiter/signup" variant="orange" size="lg">
                Register Company
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/auth/recruiter/login"
                size="lg"
                className="border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-brand-blue"
              >
                Recruiter Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-brand-dark">
            Everything Recruiters Need
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brand-slate">
            A modern hiring suite designed for speed, clarity, and great candidate experience.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="glass-strong rounded-2xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-brand-dark">{c.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">
            Ready to start hiring?
          </h2>
          <p className="mt-3 text-brand-slate">
            Create your recruiter account and post your first job today.
          </p>
          <Button href="/auth/recruiter/signup" className="mt-6" size="lg">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}