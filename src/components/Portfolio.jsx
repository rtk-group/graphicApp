import React, {useState} from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/assets";

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    { id: 1, title: 'Ads', category: 'branding', image: `${images.adPoster}` },
    { id: 2, title: 'Website Redesign', category: 'web', image: `${images.web_ui}` },
    { id: 3, title: 'Packaging Design', category: 'print', image: `${images.packeging}` },
    { id: 4, title: 'Mobile App UI', category: 'web', image: `${images.app_ui}` },
    { id: 5, title: 'Logo Design', category: 'branding', image: `${images.des_logo}` },
    { id: 6, title: 'Calender', category: 'print', image: `${images.calendar}` },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">My Portfolio</h1>
      
      {/* Filter Controls */}
      <div className="flex justify-center mb-12 space-x-4">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-2 sm:px-4 py-2 rounded-md ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          All Work
        </button>
        <button 
          onClick={() => setFilter('branding')} 
          className={`px-2 sm:px-4 py-2 rounded-md ${filter === 'branding' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Branding
        </button>
        <button 
          onClick={() => setFilter('web')} 
          className={`px-2 sm:px-4 py-2 rounded-md ${filter === 'web' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Web Design
        </button>
        <button 
          onClick={() => setFilter('print')} 
          className={`px-2 sm:px-4 py-2 rounded-md ${filter === 'print' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Print Design
        </button>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="h-64 bg-no-repeat bg-cover" style={{ backgroundImage: `url('${project.image}')`,backgroundPosition:'center' }}>
              
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">Category: {project.category}</p>
               {/* for dynamic page chane
              <Link to={`/portfolio/${project.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
                View Case Study →
              </Link> */}
              <div className="text-indigo-600 hover:text-indigo-800 font-medium">
                View Case Study →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;



