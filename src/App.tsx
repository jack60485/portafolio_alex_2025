// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectEditor from './components/ProjectEditor';
import EditProjectDetail from './components/EditProjectDetail';


function MainPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gray-900 text-white min-h-screen">
              <Navbar />
              <Hero />
              <Projects />
              <About />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/edit" element={<ProjectEditor />} />
        <Route path="/edit/:id" element={<EditProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;