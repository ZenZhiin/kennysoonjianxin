import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ProfileSection from "../components/sections/ProfileSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <ProfileSection />
      <ContactSection />
    </div>
  );
};

export default Home;
