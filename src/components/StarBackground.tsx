'use client';

import { useEffect, useRef, memo } from 'react';

const StarBackground = memo(function StarBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const fragment = document.createDocumentFragment();
    
    // Create random background stars
    const starCount = 600; // Further reduced for performance
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Simplified star size distribution
      const sizeFactor = Math.random();
      const size = sizeFactor > 0.9 ? 2.5 + Math.random() : 
                  sizeFactor > 0.7 ? 1.8 + Math.random() : 
                  0.8 + Math.random();
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position with simple text area avoidance
      let left = Math.random() * 100;
      const top = Math.random() * 100;
      
      if (left < 45 && top > 30 && top < 70) {
        left = Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
      }
      
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;
      
      // Simplified animation timing
      const duration = 3 + Math.random() * 8;
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--delay', `${Math.random() * 8}s`);
      
      // Simplified opacity distribution
      const opacity = 0.3 + Math.random() * 0.5;
      star.style.setProperty('--opacity', opacity.toString());
      
      fragment.appendChild(star);
    }
    
    container.appendChild(fragment);
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="stars-container absolute inset-0 h-full">
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </div>
  );
});

export default StarBackground; 