import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import SectionSeparator from "@/components/SectionSeparator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Stillwater Web Development",
  description: "Find answers to common questions about our web development services, project timelines, and what makes our approach different.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-royalbyte-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 hero-gradient">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            FAQ
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Everything you need to know about our services, process, and what makes us different.
          </p>
        </div>
      </section>
      
      <SectionSeparator className="my-8" />
      
      {/* FAQ Section */}
      <section className="py-12 px-6 bg-royalbyte-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-royalbyte-800/20 backdrop-blur-sm p-6 rounded-xl border border-royalbyte-800/40">
              <h3 className="text-xl font-bold text-white mb-2 min-h-[3.5rem] flex items-center">What information do you need to provide a quote?</h3>
              <p className="text-white">
                To give you an accurate estimate, we&apos;ll need to know your project goals, timeline, desired functionality, and any design preferences. The more details you can provide, the better we can tailor our solution to your needs.
              </p>
            </div>

            <div className="bg-royalbyte-800/20 backdrop-blur-sm p-6 rounded-xl border border-royalbyte-800/40">
              <h3 className="text-xl font-bold text-white mb-2 min-h-[3.5rem] flex items-center">How long does a typical project take?</h3>
              <p className="text-white">
                Our timelines vary based on project complexity. A basic website might take 2-3 weeks, while more complex projects with custom functionality can take 1-2 months. We&apos;ll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-royalbyte-800/20 backdrop-blur-sm p-6 rounded-xl border border-royalbyte-800/40">
              <h3 className="text-xl font-bold text-white mb-2 min-h-[3.5rem] flex items-center">Do you offer ongoing support after launch?</h3>
              <p className="text-white">
                Yes, we offer various maintenance plans to keep your site secure, up-to-date, and performing optimally. We can also provide training for your team to manage content updates independently.
              </p>
            </div>

            <div className="bg-royalbyte-800/20 backdrop-blur-sm p-6 rounded-xl border border-royalbyte-800/40">
              <h3 className="text-xl font-bold text-white mb-2 min-h-[3.5rem] flex items-center">What makes your websites different?</h3>
              <p className="text-white">
                Unlike agencies that use templates or page builders, we hand-code every website for optimal performance, security, and flexibility. This results in faster load times, better SEO, and a truly custom solution tailored to your specific business needs.
              </p>
            </div>
          </div>
          
          {/* Additional question in a centered row */}
          <div className="mt-6 md:w-[70%] mx-auto">
            <div className="bg-royalbyte-800/20 backdrop-blur-sm p-6 rounded-xl border border-royalbyte-800/40">
              <h3 className="text-xl font-bold text-white mb-2 min-h-[3.5rem] flex items-center">Is the mockup really free?</h3>
              <p className="text-white">
                Yes, absolutely! Our custom mockup service is 100% free with no strings attached. We believe in showing you what we can do before you make any financial commitment. This gives you a clear preview of our design approach and helps ensure we&apos;re on the same page from the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator className="my-8" />

      {/* CTA Section */}
      <section className="py-12 px-6 bg-royalbyte-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-royalbyte-800/20 backdrop-blur-sm border border-royalbyte-800/40 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your business goals with a custom web solution tailored to your specific needs.
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