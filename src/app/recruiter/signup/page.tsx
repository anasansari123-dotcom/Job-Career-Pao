import { redirect } from "next/navigation";

export default function RecruiterSignupRedirect() {
  redirect("/auth/recruiter/signup");
}