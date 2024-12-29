import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <a href="mailto:your.email@example.com"
           className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg
                      transform hover:scale-105 transition-all duration-300
                      hover:shadow-blue-500/20">
          <Mail className="w-8 h-8 mb-4 text-blue-400" />
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-400 text-center">Send me an email</p>
        </a>
        
        <a href="tel:+447934848392"
           className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg
                      transform hover:scale-105 transition-all duration-300
                      hover:shadow-blue-500/20">
          <Phone className="w-8 h-8 mb-4 text-blue-400" />
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-400 text-center">+44 7934 848392</p>
        </a>
        
        <a href="https://www.linkedin.com/in/hasnaa-k-315b85209"
           target="_blank"
           rel="noopener noreferrer"
           className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg
                      transform hover:scale-105 transition-all duration-300
                      hover:shadow-blue-500/20">
          <Linkedin className="w-8 h-8 mb-4 text-blue-400" />
          <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
          <p className="text-gray-400 text-center">Connect with me</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;