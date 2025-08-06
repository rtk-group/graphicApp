import React from "react";

// About Component
const About = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="h-64 w-64 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
            <span className="text-gray-500">Designer Photo</span>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-gray-700 mb-4 text-lg">
            I'm a passionate graphic designer with over 8 years of experience creating visual identities that help brands stand out and connect with their audience.
          </p>
          <p className="text-gray-700 mb-4">
            My approach combines strategic thinking with creative execution to deliver designs that are not only beautiful but also effective in achieving business objectives.
          </p>
          <p className="text-gray-700">
            When I'm not designing, you can find me exploring art galleries, hiking in nature for inspiration, or experimenting with new design tools and techniques.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Adobe Creative Suite', 'UI/UX Design', 'Typography', 'Brand Strategy', 'Illustration', 'Print Production', 'Web Design', 'Motion Graphics'].map((skill, index) => (
            <div key={index} className="flex items-center">
              <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="space-y-8">
          {[
            { role: 'Senior Designer', company: 'Creative Agency Inc.', period: '2018 - Present' },
            { role: 'Graphic Designer', company: 'Brand Solutions Co.', period: '2015 - 2018' },
            { role: 'Design Intern', company: 'Studio XYZ', period: '2014 - 2015' }
          ].map((exp, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-6 py-2">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} • {exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default About