import { memo } from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Navbar from "@/components/Navbar";
import StarBackground from "../components/StarBackground";
import SectionSeparator from "@/components/SectionSeparator";
import ScrollArrow from "@/components/ScrollArrow";

// Memoize ServiceCard for performance
const ServiceCard = memo(function ServiceCard({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) {
  return (
    <div className="bg-royalbyte-900/40 backdrop-blur-sm p-8 rounded-xl border border-royalbyte-800/40 hover:border-royalbyte-600/40 transition-all hover:shadow-lg hover:shadow-royalbyte-600/10">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-royalbyte-800/30">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
});

// Button component to reduce duplication
const Button = memo(function Button({ href, isPrimary, children, fullWidth = false }: { 
  href: string, 
  isPrimary?: boolean, 
  children: React.ReactNode,
  fullWidth?: boolean
}) {
  return (
    <a
      href={href}
      className={`${
        isPrimary ? "bg-royalbyte-600" : "border border-royalbyte-600"
      } text-white px-8 py-4 rounded-lg transform transition-transform duration-200 hover:scale-105 text-center block ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <span>{children}</span>
    </a>
  );
});

export default function Home() {
  // Easily adjust these values to change image positioning and size
  const imageSettings = {
    topOffset: "30px",   // Move up/down (negative = higher)
    rightOffset: "-300px", // Move left/right (negative = more right)
    width: "1000px",      // Image width
    zIndex: "10",         // Layer order (higher = more on top)
  };

  // Service data
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Custom Design & Development",
      description: "Hand-coded websites tailored to your brand. No templates or page builders—just clean, efficient code that translates to a superior user experience."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Performance",
      description: "Speed matters. Our websites load instantly, keeping visitors engaged and improving your search rankings. Experience performance that converts."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO-Driven Strategy",
      description: "We build with search engines in mind. Every aspect of your site is optimized to attract your ideal customers through strategic SEO implementation."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: "Brand Identity Integration",
      description: "We ensure cohesive brand messaging across all touchpoints. With complimentary brand identity services, your digital presence will make a lasting impression."
    }
  ];

  return (
    <div className="min-h-screen bg-[#10122E]">
      <Navbar />
      <main className="min-h-screen bg-[#10122E]">
        {/* Hero Section */}
        <div className="relative min-h-screen hero-gradient">
          <StarBackground />
          <section className="max-w-7xl mx-auto px-8 pt-56 pb-24 relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative z-20">
                <span className="text-lg tracking-wide text-white font-mono block mb-2">
                  Hand-Coded, Custom Designs
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                  Turn clicks into
                  <div className="mt-4 ml-[-20px]">
                    <AnimatedText />
                  </div>
                </h1>
                <div className="max-w-[560px]">
                  <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
                    No WordPress, no page-builders. We create lightning fast 
                    websites that convert visitors into customers. 
                  </p>
                  <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
                    Get your free mockup today, no strings attached.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-[calc(100%-48px)]">
                    <div className="flex-1">
                      <Button href="/contact" isPrimary fullWidth>Get Started</Button>
                    </div>
                    <div className="flex-1">
                      <Button href="/services" fullWidth>Our Services</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-visible h-full hidden md:block">
                <div 
                  className="absolute" 
                  style={{ 
                    top: imageSettings.topOffset, 
                    right: imageSettings.rightOffset,
                    zIndex: imageSettings.zIndex
                  }}
                >
                  <Image
                    src="/images/laptop.png"
                    alt="Laptop with website design"
                    width={1000}
                    height={600}
                    priority
                    quality={85}
                    style={{ 
                      width: imageSettings.width, 
                      maxWidth: "none" 
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Bouncing Arrow */}
          <ScrollArrow />
        </div>
        
        {/* Separator Line */}
        <SectionSeparator className="my-8" />
        
        {/* What We Do Section */}
        <section id="services" className="bg-royalbyte-900 max-w-7xl mx-auto px-8 py-10 relative">
          {/* Grid with image column */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Service cards 2x2 grid */}
            <div className="grid sm:grid-cols-2 gap-6 order-2">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
            </div>

            {/* Image column with heading above image */}
            <div className="order-1 h-full grid grid-rows-[auto_auto_1fr] gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">What We Do</h2>
              <p className="text-lg text-white w-full">
                We craft exceptional digital experiences that drive results for your business. Our approach combines aesthetics with performance to create websites that stand out.
              </p>
              {/* Custom web development image */}
              <div className="h-full min-h-[400px]">
                <Image
                  src="/images/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg?v=2"
                  alt="Web development workspace"
                  width={1200}
                  height={800}
                  priority
                  className="rounded-[30px] shadow-xl w-full h-full object-cover"
                  style={{ height: '100%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Button */}
        <div className="w-full max-w-7xl mx-auto px-8 pb-10 mt-4 text-center">
          <div className="w-[220px] mx-auto">
            <Button href="/services" isPrimary>View All Services</Button>
          </div>
        </div>

        {/* Separator Line */}
        <SectionSeparator className="mb-8" />

        {/* About Us Section */}
        <section id="about" className="bg-royalbyte-900 max-w-7xl mx-auto px-8 py-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
              <p className="text-white mb-4 max-w-prose">
                I&apos;m <span className="text-royalbyte-300 font-bold">Abel</span>, founder and lead developer at Stillwater Web Development. What started as freelance projects while finishing my degree turned into something bigger when I realized how many businesses were stuck with cookie-cutter solutions that didn&apos;t fit their needs.
              </p>
              <p className="text-white mb-6 max-w-prose">
                The name Stillwater came from those early morning coding sessions by the lake near my apartment in Orlando. There&apos;s something about that calm, focused energy that I try to bring to every project. I believe great web development happens when you take the time to really understand what a business is trying to accomplish, then build something that serves that purpose.
              </p>
              <p className="text-white mb-6 max-w-prose">
                As both founder and lead developer, I handle everything from initial concept to final deployment, working closely with each client to create websites that perform well and grow with their business. Whether it&apos;s a local restaurant needing online ordering or a startup launching their first platform, I&apos;m passionate about turning ideas into digital experiences that work.
              </p>
              <p className="text-white mb-6 max-w-prose">
                We work with businesses across Florida and beyond, focusing on clean code, thoughtful design, and solutions that make sense for real people.
              </p>

              <Button href="/contact" isPrimary>Schedule a Call</Button>
            </div>

            {/* Profile Image with Card Overlay */}
            <div className="order-1 md:order-2 w-full h-full relative flex justify-center">
              <Image
                src="/images/profile.png"
                alt="Abel Thomas"
                width={600}
                height={600}
                className="rounded-[30px] object-cover h-auto shadow-xl mx-auto"
                priority
              />
              <div className="absolute bottom-6 left-8 bg-royalbyte-900/90 backdrop-blur-sm px-6 py-4 rounded-xl border border-royalbyte-800/40 flex items-center gap-4">
                <Image
                  src="/images/favicon.svg"
                  alt="Stillwater Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-white font-bold">Abel Thomas</h3>
                  <p className="text-royalbyte-300 text-sm">Founder & Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <SectionSeparator className="my-8" />

        {/* Schedule a Call CTA Section */}
        <section className="bg-royalbyte-900 max-w-7xl mx-auto px-8 py-12 relative">
          <div className="bg-royalbyte-800/20 backdrop-blur-sm border border-royalbyte-800/40 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to elevate your online presence?</h2>
            <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can transform your digital strategy and create a website that converts visitors into customers.
            </p>
            <div className="inline-block">
              <Button href="/contact" isPrimary>Get Your Free Mockup</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
