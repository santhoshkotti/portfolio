import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    // <>
    //   {/* SEO Configuration */}
    //   <NextSeo
    //     title="Santhoshkumar P - Web Developer & Designer"
    //     description="Explore the portfolio of Santhoshkumar P, showcasing projects, skills, and achievements in web development and design."
    //     canonical="https://www.yourwebsite.com"
    //     openGraph={{
    //       type: "website",
    //       url: "https://www.yourwebsite.com",
    //       title: "Santhoshkumar P - Web Developer & Designer",
    //       description:
    //         "Explore the portfolio of Santhoshkumar P, showcasing projects, skills, and achievements in web development and design.",
    //       images: [
    //         {
    //           url: "/images/projects/1.png", // Update this to your actual image path
    //           width: 800,
    //           height: 600,
    //           alt: "Portfolio of Santhoshkumar P",
    //         },
    //       ],
    //       site_name: "Santhoshkumar P Portfolio",
    //     }}
    //     twitter={{
    //       handle: "@Santhoshthesta1", // Replace with your actual Twitter handle
    //       site: "",
    //       cardType: "summary_large_image",
    //     }}
    //   />
      
    //   {/* Main Page Content */}
      
    // </>
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
    </main>
  );
}
