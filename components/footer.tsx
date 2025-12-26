// components/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const serviceLinks = [
  { href: "/services/electrical-installation", label: "Electrical Installations" },
  { href: "/services/wiring-rewiring", label: "Wiring & Rewiring" },
  { href: "/services/construction-projects", label: "Construction & Building Services" },
  { href: "/services/inverter-solar", label: "Inverter & Solar Solutions" },
  { href: "/services/cctv-security", label: "CCTV & Security Systems" },
  { href: "/services/maintenance-repairs", label: "Maintenance & Repairs" },
  { href: "/services/industrial-electrical", label: "Industrial Electrical Services" },
  { href: "/services/consultation-inspection", label: "Consultation & Inspection" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1D] text-gray-300 py-10 px-6 md:px-12 font-montserrat">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="md:col-span-2 relative z-50">
          <Link
            href="/"
            aria-label="Princetech Electricals homepage"
            className="inline-block"
          >
            <img
              src="/logo.png"
              alt="Princetech Electricals Logo"
              className="h-14 mb-4"
            />
          </Link>

          <p className="text-sm leading-relaxed">
            Delivering safe, reliable and professional electrical solutions for
            homes, businesses and construction projects. Your safety and
            satisfaction are our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-orange-500 transition"
              >
                About Us
              </button>
            </li>
            <li>
              <Link href="/quote" className="hover:text-orange-500 transition">
                Quotation
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="hover:text-orange-500 transition"
                  aria-label={s.label}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:ndukap23@gmail.com"
                className="hover:text-orange-500"
              >
                ndukap23@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+2348063636497" className="hover:text-orange-500">
                +234 806 363 6497
              </a>
            </li>
            <li>Abia State, Nigeria</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Facebook – Personal */}
            <a
              href="https://facebook.com/princendukaigwe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            {/* Facebook – Business Page */}
            <a
              href="https://facebook.com/princetechelectricalsandgeneralservice"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="Facebook Business Page"
            >
              <FaFacebookF />
            </a>

            {/* Twitter – still placeholder since no handle provided */}
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a> */}

            {/* LinkedIn – placeholder */}
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a> */}

            {/* Instagram */}
            <a
              href="https://instagram.com/princendukaigwe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Princetech Electricals & General Services.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
