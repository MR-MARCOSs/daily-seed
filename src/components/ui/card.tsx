import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};