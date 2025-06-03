import React from 'react';

interface SectionSeparatorProps {
  className?: string;
}

export default function SectionSeparator({ className = '' }: SectionSeparatorProps) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-8 my-10 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-royalbyte-600/40 to-transparent"></div>
    </div>
  );
} 