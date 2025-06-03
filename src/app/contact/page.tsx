import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";
import SectionSeparator from "@/components/SectionSeparator";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Stillwater Web Development",
  description: "Get in touch with Stillwater Web Development to discuss your project, schedule a consultation, or learn more about our custom web solutions.",
};

// ContactMethod component
const ContactMethod = ({ 
  icon, title, content, link = "", linkText = "" 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  link?: string; 
  linkText?: string;
}) => (
  <div className="flex items-start">
    <div className="text-royalbyte-300 mr-3 flex-shrink-0 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1.5">{title}</h3>
      <p className="text-royalbyte-100 mb-1.5">{content}</p>
      {link && linkText && (
        <a 
          href={link} 
          className="text-royalbyte-300 hover:text-white inline-flex items-center transition-colors"
          target={link.startsWith('http') ? "_blank" : undefined}
          rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
        >
          {linkText}
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      )}
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-royalbyte-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 hero-gradient">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s create something exceptional.
          </p>
        </div>
      </section>
      <SectionSeparator className="my-8" />
      {/* Contact Form & Info Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            {/* Contact Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <div className="space-y-6">
                  <ContactMethod 
                    icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="Email"
                    content="The fastest way to reach our team."
                    link="mailto:contact@stillwaterwebdev.com"
                    linkText="contact@stillwaterwebdev.com"
                  />
                  <ContactMethod 
                    icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                    title="Schedule a Call"
                    content="Book a free consultation at a time that works for you."
                    link="https://calendly.com/stillwaterwebdev/30min"
                    linkText="Book a time slot"
                  />
                  <ContactMethod 
                    icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    title="Location"
                    content="Based in Orlando, serving clients nationwide with custom web solutions."
                  />
                </div>
              </div>
              <div className="mt-auto">
                <div className="mt-10 bg-royalbyte-800/20 backdrop-blur-sm border border-royalbyte-800/40 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Need a Quick Response?</h3>
                  <p className="text-royalbyte-100 mb-4">
                    For urgent inquiries or if you have a tight deadline, consider scheduling a direct call with our team.
                  </p>
                  <Link 
                    href="tel:+19049307504" 
                    className="bg-royalbyte-600 text-white px-6 py-4 rounded-lg inline-flex items-center transform transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 