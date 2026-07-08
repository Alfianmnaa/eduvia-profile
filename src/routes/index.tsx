import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ProgramShowcase } from "@/components/home/ProgramShowcase";
import { WhyEduvia } from "@/components/home/WhyEduvia";
import { LearningJourney } from "@/components/home/LearningJourney";
import { ECourseHighlight } from "@/components/home/ECourseHighlight";
import { Testimonials } from "@/components/home/Testimonials";
import { Partners } from "@/components/home/Partners";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eduvia Academy Indonesia — Platform Pelatihan & Sertifikasi" },
      {
        name: "description",
        content:
          "Belajar langsung dari ahlinya. Dapatkan sertifikasi resmi dan tingkatkan kompetensi melalui pelatihan, diklat, dan e-course berbasis proyek.",
      },
      { property: "og:title", content: "Eduvia Academy Indonesia" },
      {
        property: "og:description",
        content:
          "Platform pelatihan dan sertifikasi terbaik untuk Guru, Mahasiswa, dan Profesional.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <ProgramShowcase />
      <WhyEduvia />
      <LearningJourney />
      <ECourseHighlight />
      <Testimonials />
      <Partners />
      <FinalCTA />
    </SiteLayout>
  );
}
