import React from "react";
import { Link } from "react-router-dom";

// social media icons
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

// Footer Component
const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      bg: "bg-blue-600",
      hoverBg: "bg-blue-700",
      href: "#",
    },
    {
      icon: <FaFacebookF />,
      bg: "bg-blue-500",
      hoverBg: "bg-blue-600",
      href: "#",
    },
    {
      icon: <LuInstagram />,
      bg: "bg-gradient-to-tr from-purple-500 to-pink-500",
      hoverBg: "bg-gradient-to-tr from-purple-600 to-pink-600",
      href: "https://www.instagram.com/yogprint9015",
    },
    {
      icon: <FaTwitter />,
      bg: "bg-sky-500",
      hoverBg: "bg-sky-600",
      href: "#",
    },
  ];
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={'/images/dhLogo2.jpg'} className="w-15 rounded-lg" alt="" />
            <p className="text-gray-400 mt-2">
              Creating meaningful design solutions that help brands connect with their audience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Brand Identity</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Web Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Print Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Illustration</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="flex space-x-4 mb-4">

              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className={`${social.bg} ${social.hoverBg} p-3 rounded-lg text-white flex items-center justify-center hover:shadow-lg transition-all duration-300`}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gray-400">yadrammaithil@gmail.com</p>
            <p className="text-gray-400">+91 7579873777</p>
            <p className="text-sm mt-3 text-gray-100 font-semibold">made by RTK Group</p>
            <a href="https://rtkgroup.netlify.app" className="text-sm text-blue-400">rtkgroup.com</a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 py-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;