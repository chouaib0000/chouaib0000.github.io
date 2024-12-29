import React from 'react';
import Card from './ui/Card';

const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["Advanced Microsoft Office", "Payment Processing Systems", "Financial Analysis", "Data Analysis"],
    color: "from-blue-400 to-cyan-400"
  },
  {
    title: "Professional Skills",
    skills: ["Problem Solving", "Process Improvement", "Team Leadership", "Project Management"],
    color: "from-purple-400 to-pink-400"
  },
  {
    title: "Languages",
    skills: ["English", "Arabic", "French", "Darija", "Tashelhit"],
    color: "from-green-400 to-emerald-400"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <Card key={index} hover="3d" className="group">
            <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} 
                           text-transparent bg-clip-text text-center`}>
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center group/item">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 
                                 group-hover/item:scale-125 transition-transform"></span>
                  <span className="group-hover/item:translate-x-1 transition-transform">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;