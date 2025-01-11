import React from 'react'

export default function Home() {
  return (
    <>
     <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-10 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Welcome to My Portfolio
    </h1>
    <p className="text-lg md:text-xl mb-6">
      Showcasing my skills and projects in web development.
    </p>
    <a
      href="#projects"
      className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200"
    >
      View Projects
    </a>
  </div>
  {/* // Feature Section */}

  <div className="bg-gray-100 py-16 px-8">
    <h2 className="text-3xl font-bold text-center mb-8">What I Offer</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 shadow-md rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Web Development</h3>
        <p className="text-gray-600">
          Responsive and modern websites built with React and Tailwind.
        </p>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
        <p className="text-gray-600">
          Beautiful interfaces focusing on user experience.
        </p>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Backend Integration</h3>
        <p className="text-gray-600">
          Full-stack functionality with Node.js and Express.
        </p>
      </div>
    </div>
  </div>
  <div id="projects" className="py-16 px-8">
    <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
        { title: 'Project 3', description: 'Description of project 3' },
      ].map((project, index) => (
        <div
          key={index}
          className="bg-white p-6 shadow-md rounded-lg hover:scale-105 transform transition"
        >
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="bg-indigo-600 text-white py-16 px-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
    <p className="text-lg mb-6">I'd love to hear from you!</p>
    <div className="flex justify-center gap-4">
      <a
        href="mailto:youremail@example.com"
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200"
      >
        Email Me
      </a>
      <a
        href="https://linkedin.com/in/yourprofile"
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200"
      >
        LinkedIn
      </a>
    </div>
  </div>
    
    </>
  )
}
