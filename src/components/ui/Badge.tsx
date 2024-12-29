import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'green';
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    green: 'bg-green-500/10 text-green-400 border-green-500/20'
  };

  return (
    <span className={`
      px-3 py-1 rounded-full text-sm
      border backdrop-blur-sm
      ${colors[color]}
    `}>
      {children}
    </span>
  );
};

export default Badge;