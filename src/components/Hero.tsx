import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center perspective-1000">
        <Card hover="both" className="backdrop-blur-sm">
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-2 w-full justify-center">
              <Badge color="purple">Available for Work</Badge>
              <Badge color="green">Remote</Badge>
            </div>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Professional headshot"
              className="w-48 h-48 rounded-full mx-auto mb-8 shadow-xl
                         ring-4 ring-blue-500/20 hover:ring-blue-500/40
                         transition-all duration-300"
            />
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Hasnaa Kissany
              </h1>
              <h2 className="text-xl text-blue-400 mb-6">Billing Specialist | Financial Analyst</h2>
              <p className="max-w-2xl mx-auto mb-8 text-gray-300 leading-relaxed">
                A dedicated, diligent, and multilingual professional with extensive experience in data analysis
                and payment processing. Passionate about problem-solving and delivering practical solutions.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/hasnaa-k-315b85209" 
                   className="social-icon-link"
                   target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:your.email@example.com" 
                   className="social-icon-link">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="tel:+447934848392" 
                   className="social-icon-link">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;