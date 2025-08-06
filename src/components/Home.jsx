import React from "react";
import { Link } from "react-router-dom";

// Home Component
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Creative Design Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforming ideas into visually stunning realities with innovative design.
          </p>
          <div className="space-x-4">
            <Link to="/portfolio" className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition">
              View Portfolio
            </Link>
            <Link to="/contact" className="inline-block px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-indigo-600 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image {item}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                <p className="text-gray-600 mb-4">Brief description of the project and design approach.</p>
                <Link to={`/portfolio/project-${item}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/portfolio" className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Brand Identity', 'Web Design', 'Print Design'].map((service) => (
              <div key={service} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-600">
                  Professional {service.toLowerCase()} services tailored to your business needs and goals.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Client Name {item}</h4>
                  <p className="text-gray-500 text-sm">CEO, Company {item}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working with this designer was an incredible experience. They understood our vision and delivered beyond our expectations. The attention to detail and creative approach resulted in a brand identity that perfectly represents our company."
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home