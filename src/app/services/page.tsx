import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SectionSeparator from "@/components/SectionSeparator";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Services | Stillwater Web Development",
  description: "Explore our custom web development services including design, development, e-commerce, SEO, and maintenance for high-performance websites that convert.",
};

// Service Card component
const ServiceCard = ({ 
  id, title, description, icon, features 
}: { 
  id: string, 
  title: string, 
  description: string, 
  icon: React.ReactNode,
  features: string[] 
}) => (
  <div id={id} className="bg-royalbyte-800/20 backdrop-blur-sm border border-royalbyte-800/40 hover:border-royalbyte-600/40 rounded-xl overflow-hidden group transition-all duration-300 scroll-mt-28 flex flex-col h-full">
    <div className="p-6 md:p-8 flex-grow">
      <div>
        <div className="bg-royalbyte-800/30 rounded-xl w-14 h-14 flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white mb-4 min-h-[100px]">{description}</p>
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="px-6 md:px-8 py-4 border-t border-royalbyte-800/40 bg-royalbyte-800/30 group-hover:bg-royalbyte-800/40 transition-all duration-300 mt-auto">
      <Link href="/contact" className="text-white hover:text-white font-semibold inline-flex items-center transition-colors">
        Discuss Your Project
        <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  const services = [
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      description: "Convert browsers into buyers with high-performing online stores built for seamless shopping experiences.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>,
      features: [
        "Custom shopping experiences designed for your products",
        "Optimized checkout flows to maximize conversions",
        "Secure payment processing with multiple gateway options",
        "Inventory management and product catalog solutions",
        "Analytics integration to track sales and customer behavior"
      ]
    },
    {
      id: "development",
      title: "Web Development",
      description: "Hand-coded, high-performance websites with custom design and ongoing maintenance.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>,
      features: [
        "Custom design tailored to your brand and business goals",
        "User-centered UX design focused on conversions",
        "Mobile-first responsive layouts that work on all devices",
        "Clean, well-documented code that's easy to maintain",
        "Optimized for speed with 95+ PageSpeed scores",
        "Regular software updates and security patches",
        "Ongoing maintenance and content updates as needed"
      ]
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Get found by your ideal customers with our technical and on-page SEO strategies that increase visibility.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>,
      features: [
        "Technical SEO optimization for search engine visibility",
        "Keyword research and content strategy development",
        "On-page optimization with semantic HTML",
        "Performance optimization for better rankings",
        "Regular reports and analytics to track progress"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-royalbyte-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 hero-gradient">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Services That Drive Results
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Custom web solutions that combine stunning design with technical excellence to help your business thrive online.
          </p>
        </div>
      </section>
      
      <SectionSeparator className="my-8" />
      
      {/* Services Overview */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      <SectionSeparator className="my-8" />
      
      {/* Interactive Process Timeline */}
      <section className="py-12 px-6 bg-royalbyte-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Our Process</h2>
          <ProcessTimeline />
        </div>
      </section>
      
      <SectionSeparator className="my-8" />

      {/* CTA Section */}
      <section className="py-12 px-6 bg-royalbyte-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-royalbyte-800/20 backdrop-blur-sm border border-royalbyte-800/40 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with a custom web solution tailored to your specific needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-royalbyte-600 text-white px-8 py-4 rounded-lg transform transition-transform duration-200 hover:scale-105"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 