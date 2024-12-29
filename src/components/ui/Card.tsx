import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: '3d' | 'scale' | 'both';
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = 'scale' }) => {
  const hoverEffects = {
    '3d': 'hover:rotate-y-12 transform-style-3d',
    'scale': 'hover:scale-105',
    'both': 'hover:rotate-y-12 hover:scale-105 transform-style-3d'
  };

  return (
    <div className={`
      bg-gray-800/50 p-6 rounded-lg shadow-xl
      transition-all duration-500 ease-out
      hover:shadow-blue-500/20
      ${hoverEffects[hover]}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;