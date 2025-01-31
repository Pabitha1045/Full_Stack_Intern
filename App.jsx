import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope } from 'react-icons/fa'; // Envelope icon for contact button

const App = () => {
  const [isExperienceOpen, setExperienceOpen] = useState(true);
  const [isEducationOpen, setEducationOpen] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen scroll-smooth">

      {/* Sticky Navigation Bar */}
      <nav className="bg-blue-700 text-white py-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Resume</h1>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-yellow-400 transition-all">About Me</a></li>
            <li><a href="#skills" className="hover:text-yellow-400 transition-all">Skills</a></li>
            <li><a href="#education" className="hover:text-yellow-400 transition-all">Education</a></li>
            <li><a href="#experience" className="hover:text-yellow-400 transition-all">Experience</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition-all">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-center text-white shadow-xl mt-16" id="about">
        <h1 className="text-5xl font-extrabold transform transition-transform hover:scale-105">
          Pabitha Shanmugam
        </h1>
        <p className="text-lg mt-3 font-medium italic">AI & Data Science Enthusiast | Problem Solver</p>
      </header>

      {/* About Me and Skills Section */}
      <section className="container my-12 grid grid-cols-1 md:grid-cols-2 gap-12" id="skills">
        {/* About Me */}
        <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-blue-50">
          <h2 className="text-4xl font-semibold text-blue-700 hover:text-blue-900">About Me</h2>
          <p className="mt-4 text-gray-700">
            I am an AI and Data Science student passionate about leveraging technology to solve real-world problems. My interests include machine learning, deep learning, and data-driven innovations.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-blue-50">
          <h2 className="text-4xl font-semibold text-blue-700 hover:text-blue-900">Skills</h2>
          <ul className="mt-4 text-gray-700">
            <li className="hover:text-blue-800 transition-all">Python | C | HTML | CSS | Java | DBMS</li>
            <li className="hover:text-blue-800 transition-all">Data Structures and Algorithms</li>
            <li className="hover:text-blue-800 transition-all">MySQL</li>
            <li className="hover:text-blue-800 transition-all">VScode | Spyder | Canva | GitHub</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="container my-12 animate-fadeIn" id="education">
        <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105">
          <h2 className="text-4xl font-semibold text-blue-700 hover:text-blue-900">Education</h2>
          <button
            className="mt-4 text-blue-700 hover:text-blue-900"
            onClick={() => setEducationOpen(!isEducationOpen)}
          >
            {isEducationOpen ? 'Hide Details' : 'Show Details'}
          </button>
          {isEducationOpen && (
            <div className="mt-4 text-gray-700">
              <p>B.Tech (AI & DS) - Sri Eshwar College of Engineering | CGPA: 7.4 (2023 - 2027)</p>
              <p>HSC - Amrita Vidyalayam Senior Secondary School | 93.0% (2021 - 2023)</p>
              <p>SSLC - Amrita Vidyalayam Senior Secondary School | 76.6% (2020 - 2021)</p>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container my-12 animate-fadeIn" id="experience">
        <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105">
          <h2 className="text-4xl font-semibold text-blue-700 hover:text-blue-900">Experience</h2>
          <button
            className="mt-4 text-blue-700 hover:text-blue-900"
            onClick={() => setExperienceOpen(!isExperienceOpen)}
          >
            {isExperienceOpen ? 'Hide Details' : 'Show Details'}
          </button>
          {isExperienceOpen && (
            <div className="mt-4 text-gray-700">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Airline Management System</h3>
                <p className="mt-2">Developed using SQL and Python (Tkinter), implementing features like ticket booking and billing.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">AI Leaf Disease Detection</h3>
                <p className="mt-2">Built a CNN model using Python, TensorFlow, and Keras to classify leaf diseases with high accuracy.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Rescue Rover</h3>
                <p className="mt-2">Integrated GPR, LiDAR, and other sensors to create 3D maps for disaster response, enhanced by ML and computer vision.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-gradient-to-l transform hover:scale-110 transition-all">
        <a href="mailto:Pabitha.s2023ai-ds@sece.ac.in">
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Contact Section */}
      <section className="container my-12 animate-fadeIn" id="contact">
        <h2 className="text-4xl font-semibold text-center text-blue-700">Contact</h2>
        <div className="text-center mt-6">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all transform hover:scale-105">
            Email Me
          </button>
        </div>
      </section>

    </div>
  );
};

export default App;