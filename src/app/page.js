import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Santhoshkumar P - Web Developer & Designer"
        description="Explore the portfolio of Santhoshkumar P, showcasing projects, skills, and achievements in web development and design."
        openGraph={{
          type: 'website',
          url: 'https://www.yourwebsite.com',
          title: 'Santhoshkumar P - Web Developer & Designer',
          description: 'Explore the portfolio of Santhoshkumar P.',
          images: [
            {
              url: 'icon.ico',
              width: 800,
              height: 600,
              alt: 'Portfolio Image Alt Text',
            },
          ],
        }}
      />
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          {/* <AchievementsSection /> */}
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
