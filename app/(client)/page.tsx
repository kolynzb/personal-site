import HeroSection from "@components/landing/HeroSection";
import ServicesSect from "@components/landing/ServicesSect";
import AwardsSect from "@components/landing/AwardsSect";
import WorkExperience from "@components/landing/WorkExperience";
import Achievements from "@components/landing/Achievements";
import Testimonials from "@components/landing/Testimonials";
import ContactMe from "@components/landing/ContactMe";
import FeaturedWorks from "@components/landing/FeaturedWorks";
import {
  getAllExperience,
  getAllTestimonials,
  getAwards,
  getFeaturedProjects,
} from "@lib/sanity.api";

const services = [
  {
    name: "Web Design",
    description:
      "Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.",
  },
  {
    name: "mobile app Design",
    description:
      "Mobile application development is a highlight that businesses are interested in at the moment and in the future.",
  },
  {
    name: "Branding",
    description:
      "Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.",
  },
  {
    name: "3d Modeling",
    description:
      "Help you translate your existing design or concept into CAD or to work with you to develop the ideal design.",
  },
];

export default async function Page() {
  const featuredProjects = await getFeaturedProjects();
  const awards = await getAwards();
  const testimonials = await getAllTestimonials();
  const experience = await getAllExperience();
  return (
    <>
      <HeroSection />
      <ServicesSect services={services} />
      <FeaturedWorks projects={featuredProjects} />
      <AwardsSect awards={awards} />
      <WorkExperience experiences={experience} />
      <Achievements />
      <Testimonials testimonials={testimonials} />
      <ContactMe />
    </>
  );
}
