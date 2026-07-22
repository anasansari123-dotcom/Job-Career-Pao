import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedCompanies } from "@/components/home/FeaturedCompanies";
import { JobSearch } from "@/components/home/JobSearch";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MembershipPlans } from "@/components/home/MembershipPlans";
import { CompanyRegistration } from "@/components/home/CompanyRegistration";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SuccessStories } from "@/components/home/SuccessStories";
import { BlogSection } from "@/components/home/BlogSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCompanies />
      <JobSearch />
      <FeaturedJobs />
      <HowItWorks />
      <MembershipPlans />
      <CompanyRegistration />
      <WhyChooseUs />
      <SuccessStories />
      <BlogSection />
      <CTASection />
    </>
  );
}