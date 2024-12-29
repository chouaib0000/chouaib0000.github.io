import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;