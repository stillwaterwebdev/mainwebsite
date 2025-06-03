"use client";

import { useState } from "react";

const steps = [
  {
    title: "Discovery & Strategy",
    description:
      "We begin with a comprehensive analysis of your business goals, target audience, and market position to develop a tailored digital strategy. This includes a free custom mockup so you can preview our approach with no commitment.",
    keyActivities: [
      "In-depth consultation to understand your business objectives",
      "Custom mockup creation for your homepage at no cost",
      "Strategic planning for information architecture"
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 20L3 17V4L9 7M9 20V7M9 20L15 17M9 7L15 4M15 17V4M15 17L21 20V7L15 4" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Design & Prototyping",
    description:
      "We transform strategy into visual concepts through iterative design and interactive prototyping. Our collaborative approach ensures the final design perfectly aligns with your brand identity and user experience goals.",
    keyActivities: [
      "Creation of wireframes for key page layouts",
      "Interactive prototyping to test user flows",
      "Mobile-first responsive design optimization"
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8H19" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round"/>
        <path d="M16.5 15.5C16.5 16.3284 15.8284 17 15 17C14.1716 17 13.5 16.3284 13.5 15.5C13.5 14.6716 14.1716 14 15 14C15.8284 14 16.5 14.6716 16.5 15.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 14V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 13.6V8.4C9 8.08468 9 7.92702 8.9455 7.79942C8.89801 7.68938 8.81062 7.60199 8.70058 7.5545C8.57298 7.5 8.41532 7.5 8.1 7.5H5.9C5.58468 7.5 5.42702 7.5 5.29942 7.5545C5.18938 7.60199 5.10199 7.68938 5.0545 7.79942C5 7.92702 5 8.08468 5 8.4V13.6C5 13.9153 5 14.073 5.0545 14.2006C5.10199 14.3106 5.18938 14.398 5.29942 14.4455C5.42702 14.5 5.58468 14.5 5.9 14.5H8.1C8.41532 14.5 8.57298 14.5 8.70058 14.4455C8.81062 14.398 8.89801 14.3106 8.9455 14.2006C9 14.073 9 13.9153 9 13.6Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    title: "Development & Testing",
    description:
      "Our development team transforms designs into fully functional websites using clean, efficient code. We employ rigorous testing methodologies across devices, browsers, and user scenarios to ensure optimal performance and security.",
    keyActivities: [
      "Hand-coded development",
      "Comprehensive cross-browser and cross-device testing",
      "Performance optimization and security implementation"
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Launch & Optimization",
    description:
      "We execute a carefully planned deployment process to ensure a smooth transition to your live website. Post-launch, we monitor performance metrics and user behavior to continuously optimize your site for maximum business impact.",
    keyActivities: [
      "Comprehensive pre-launch quality assurance checks",
      "Setup of analytics and performance monitoring tools",
      "Ongoing optimization based on user data and business goals"
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 2.04932C13 2.04932 16.5 5.99994 16.5 12C16.5 18 13 21.9506 13 21.9506" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 21.9506C11 21.9506 7.5 18 7.5 12C7.5 5.99994 11 2.04932 11 2.04932" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2.5 9.5H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2.5 14.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.5 17.5L16.5 15.5V19.5L19.5 17.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 17.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
];

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-8 relative">
        {/* Horizontal line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-royalbyte-800/40" />

        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className="relative z-10 flex flex-col items-center group focus:outline-none"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full font-bold transition-all border-2 ${
                idx === active
                  ? "bg-royalbyte-600 border-royalbyte-600 text-white shadow-lg shadow-royalbyte-600/20"
                  : "bg-royalbyte-900 border-royalbyte-800 text-white group-hover:border-royalbyte-600"
              }`}
            >
              {step.icon}
            </div>
            <div className="mt-3 flex flex-col items-center">
              <span
                className={`text-sm font-medium transition-colors ${
                  idx === active ? "text-royalbyte-300" : "text-white/80 group-hover:text-white"
                }`}
              >
                Phase {idx + 1}
              </span>
              <span
                className={`text-center font-semibold transition-colors ${
                  idx === active ? "text-white" : "text-white/80 group-hover:text-white"
                }`}
              >
                {step.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Active step content */}
      <div className="mt-12 max-w-4xl mx-auto bg-royalbyte-800/20 backdrop-blur-sm border border-royalbyte-800/40 rounded-xl p-6 md:p-8 transition-all">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="md:w-3/4">
            <h3 className="text-2xl font-bold text-white mb-4">{steps[active].title}</h3>
            <p className="text-white text-lg mb-6">{steps[active].description}</p>
            
            <div>
              <h4 className="text-lg font-semibold text-royalbyte-300 mb-3">Key Activities:</h4>
              <ul className="space-y-2">
                {steps[active].keyActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-royalbyte-600 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="hidden md:flex md:w-1/4 justify-center items-center">
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-royalbyte-800/50 border-2 border-royalbyte-600">
              <div className="w-20 h-20 flex items-center justify-center text-white text-4xl font-bold">
                {active + 1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 