import React from 'react';
import Card from './ui/Card';
import Badge from './ui/Badge';

const experiences = [
  {
    title: "Financial Analyst / Billing Analyst",
    company: "Web.com",
    period: "2015 - 2020",
    achievements: [
      "Reduced billing errors by 35% through process improvements",
      "Implemented new commission calculator boosting efficiency by 25%",
      "Collected 20% more in-house debt reducing external agency fees",
      "Improved invoice accuracy by 40%"
    ],
    skills: ["Financial Analysis", "Process Improvement", "Team Leadership"]
  },
  {
    title: "Billing Specialist / Group Accounts Assistant",
    company: "Web.com",
    period: "2010 - 2015",
    achievements: [
      "Managed high volume billing runs and invoices",
      "Reconciled accounts receivable ledger",
      "Brought debt collection in-house, saving on agency costs",
      "Implemented QC processes to enhance client experience"
    ],
    skills: ["Billing Systems", "Account Reconciliation", "Quality Control"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Professional Experience
      </h2>
      <div className="grid gap-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} hover="scale" className="group">
            <div className="relative">
              <span className="absolute -top-3 -right-3 bg-blue-500/20 text-blue-400 
                             px-4 py-1 rounded-full text-sm backdrop-blur-sm">
                {exp.period}
              </span>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-4">{exp.company}</p>
              <ul className="list-none space-y-2 text-gray-300 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, i) => (
                  <Badge key={i} color="purple">{skill}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;