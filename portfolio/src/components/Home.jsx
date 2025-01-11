import React from 'react'

export default function Home() {
  return (
    <>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome <br /> myself uzair

            </h1>
            <p className="text-lg md:text-xl mb-6">
              I am full-stack web developer <br />
              Proficient in Backend development with nodejs
            </p>
            <a
              href="#projects"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200"
            >
              View Projects
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJ1VMUyNlu2hT3wqOERiy3ifvHCwJ9oBq1fLCBQ8TBAz1-fA/viewform?usp=dialog"
              className="bg-white text-indigo-600 px-6 py-3 m-5 rounded-lg font-semibold shadow-md hover:bg-gray-200"
            >
              Book an Appointment
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGN35Fvc_dn3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732342372629?e=1741824000&v=beta&t=DzL-HobqbEpuWZb-L32bvu4WLbmLyjWjq9M6ToYDvQQ"
              alt="Portfolio"
              className="w-full max-w-md rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* // Feature Section */}

      <div className="bg-blue-400 bg-blue-400 py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">What I Offer</h2>
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
        <div className="flex  gap-8 ">
          {[
            { title: 'Vidtube', description: 'This project is the custom backend of youtube like app.which is impossible to build all by myself still I build the scehmas using mongoose and then I structure the models for comments,likes,subscriber,users,channels and subscribeTo after that I constructed controller and routes for the given models first I builded the error handlers in the utils so it can become easy to handle errors plus I build the userauthentication and ALL the CRUD operations as well in  usercontroller etc.', Github: 'https://github.com/uziiii152/vidtube/' },
            { title: 'Employee Management System', description: 'Employee management system is the custom backend build by nodejs for management system for the hospital name aApollonia Dental Practice where doctors interact with there patients and management manage the staff plus the patients and which patient is assigned to which doctor , Salaries and other management stuff etc' ,Github:'https://github.com/uziiii152/Employee-Management-System'}
          ].map((project, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white p-6 shadow-md rounded-lg hover:scale-105 transform transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="p-6">{project.description}</p>
              <a
                href={project.Github}
                className="bg-white text-indigo-600 px-6 py-3  rounded-lg font-semibold shadow-md hover:bg-gray-200">{project.Github}</a>

            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-400 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">I'd love to hear from you!</p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:uzairqaseem162@gmail.com"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/uzair-qaseem-315838285/"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200"
          >
            <img className='size-5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAd7X///8Ac7NGlMRGk8QAdrUAbLAAbrDZ7PXV6fPy+fw9ir/p9Pkugbo0hr3D2umz0ORUnMh3q9C72eplocoIe7dsps6dxN6lyeCDs9TL4u+WwNzg7vVTmMYhg7uy1OcLxWtDAAABaklEQVRIie3W7Y6CMBAFUBxohwIK8qEIgu//lltou7TortNu9p83MRGSIzgzlEaHwETyU51jr5wrBWsODDzCgNcLrHjkHV5JOIE/hEnCOATGEiYhMHGgLBELgdi1lxlJ1IH8uvS17CjShtiriRCekM1mlm7oBaE2sCEMhA1vBg5+kCUG9n63GmGqXJYTqmNDlhcrrAkXdPsIx3FI+4TidpPDkHNOm7ndrP6U9TH/5VZxDewPsEvaS5t0CK8h9qXKSd4tq9T3EaC73rOl2EVp/X0bcqcddzMMU7YtbFuHHShsqH+lnJwlsUIqFIW7mLZAhPuYOfaGh5nR4fBotgLVQIWik+PE+11h38NCLUGmV+Ypfw9HdQU0j/lAhfr9AKafggizXHc81/VJibA4qvKzk4HE4nzgB/4jfLU8UiA26RqxQn0wfEOhTjTPMEIdZh9EOsw9QXzpPOdvMHgTGLztDN7oBm+twzfzYfkCChobmnKthiYAAAAASUVORK5CYII=" alt="" />LinkedIn
          </a>
        </div>
      </div>

    </>
  )
}
