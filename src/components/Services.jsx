import React from "react";
import { Link } from "react-router-dom";

// Services Component
const Services = () => {
  const services = [
    {
      title: 'Brand Identity Design',
      description: 'Comprehensive branding solutions including logo design, color palette, typography, and brand guidelines to establish a cohesive visual identity.',
      icon: '🎨',
      items: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Brand Collateral']
    },
    {
      title: 'Web & App Design',
      description: 'User-centered design for websites and mobile applications that are visually appealing, intuitive to use, and optimized for conversions.',
      icon: '💻',
      items: ['Website UI/UX', 'Mobile App Design', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Print Design',
      description: 'High-quality print materials designed to make a lasting impression, from business stationery to marketing collateral.',
      icon: '📄',
      items: ['Brochures', 'Flyers', 'Posters', 'Packaging']
    },
    {
      title: 'Illustration',
      description: 'Custom illustrations tailored to your brand personality and messaging needs.',
      icon: '✏️',
      items: ['Digital Illustrations', 'Icons', 'Infographics', 'Character Design']
    }
  ];
  
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4 text-center">My Services</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Comprehensive design solutions tailored to your unique needs and business goals.
      </p>
      
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold">{service.title}</h2>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-700 mb-6">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-indigo-50 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to start your project?</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Get in touch to discuss your design needs and how we can work together to create something amazing.
        </p>
        <Link to="/contact" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Services