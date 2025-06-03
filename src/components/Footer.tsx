import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#090A1E] border-t border-royalbyte-800/30 text-white px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Column 1: Logo & About */}
          <div>
            <Link href="/" className="block mb-5">
              <Image src="/images/Stillwater2.svg" alt="Stillwater Web Development" width={150} height={42} className="mb-3" />
            </Link>
            <p className="text-sm text-royalbyte-300 leading-relaxed mb-5">
              We craft exceptional websites that convert visitors into customers. Hand-coded, blazing fast, and built for business results.
            </p>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#development" className="text-royalbyte-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services#ecommerce" className="text-royalbyte-300 hover:text-white transition-colors">E-Commerce Solutions</Link></li>
              <li><Link href="/services#seo" className="text-royalbyte-300 hover:text-white transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-royalbyte-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-royalbyte-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/faq" className="text-royalbyte-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-royalbyte-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm text-royalbyte-300 mb-3 flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@stillwaterwebdev.com" className="hover:text-white transition-colors">contact@stillwaterwebdev.com</a>
            </p>
            <p className="text-sm text-royalbyte-300 mb-5 flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+19049307504" className="hover:text-white transition-colors">(904) 930-7504</a>
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-6 border-t border-royalbyte-800/30 text-center">
          <p className="text-xs text-royalbyte-300">
            © {currentYear} Stillwater Web Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 