"use client";

export default function ScrollArrow() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const position = servicesSection.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
      <button 
        onClick={scrollToServices}
        className="animate-bounce focus:outline-none"
        aria-label="Scroll to What We Do section"
      >
        <svg className="h-9 w-9 text-white hover:text-royalbyte-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l5 5 5-5" />
        </svg>
      </button>
    </div>
  );
} 