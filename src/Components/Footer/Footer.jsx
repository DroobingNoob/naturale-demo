import React from "react";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f8efea] text-brandGreenDark pt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="space-y-4">
          {/* <h3 className="text-lg font-bold">Naturale Makhana</h3> */}
          <Link to="/" className="flex items-center">
            <img
              src="/logoremovebg.png"
              alt="Naturale Makhana"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed">
            100% natural, nutritious, and delicious makhana snacks, sourced
            directly from farmers across India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "Privacy Policy", to: "/" },
              { label: "Terms & Conditions", to: "/" },
              { label: "Frequently Asked Question (FAQ)", to: "/" },
              { label: "About Us", to: "/" },
              { label: "Contact", to: "/" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-600 text-sm hover:text-brandTeal transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact</h3>
          <div className="flex items-center text-gray-600 text-sm space-x-2">
            <Mail className="text-brandTeal" size={18} />
            <span>support@naturale.com</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm space-x-2">
            <Phone className="text-brandTeal" size={18} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-600 hover:text-brandTeal transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-brandTeal transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-brandTeal transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 border-t border-gray-300 mt-10"></div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm pb-6">
        &copy; {new Date().getFullYear()} Naturale Makhana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
