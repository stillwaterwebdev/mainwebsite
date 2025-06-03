'use client';

import { useEffect, useState, useMemo, memo } from 'react';

const words = ['leads', 'revenue', 'growth', 'repeat buyers', 'success', 'fans', 'customers'];
const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_TIME = 3500;

const AnimatedText = memo(function AnimatedText() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  // Use useMemo to calculate longest word just once
  const longestWord = useMemo(() => 
    words.reduce((a, b) => a.length >= b.length ? a : b, ''), 
    []
  );

  // Cursor class - memoize the value to avoid recalculating
  const cursorClass = useMemo(() => 
    isWaiting 
      ? "absolute h-[55px] w-[2px] bg-royalbyte-300 animate-blink" 
      : "absolute h-[55px] w-[2px] bg-royalbyte-300",
    [isWaiting]
  );

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId: NodeJS.Timeout;

    const handleAnimation = () => {
      if (isWaiting) {
        timeoutId = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, PAUSE_TIME);
        return;
      }

      if (isDeleting) {
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          timeoutId = setTimeout(() => {
            setText(text.slice(0, -1));
          }, DELETING_SPEED);
        }
      } else {
        if (text === currentWord) {
          setIsWaiting(true);
        } else {
          timeoutId = setTimeout(() => {
            setText(currentWord.slice(0, text.length + 1));
          }, TYPING_SPEED);
        }
      }
    };

    handleAnimation();
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, isWaiting]);

  // Calculate cursor position just once per render
  const cursorPosition = useMemo(() => ({
    left: text.length > 0 ? `calc(${text.length * 0.6}em + 3px)` : '2px',
    top: 'calc(50% + 0px)',
    transform: 'translateY(-50%)'
  }), [text.length]);

  return (
    <div className="inline-block bg-royalbyte-800/30 backdrop-blur-sm px-6 rounded-lg shadow-lg" style={{ height: '100px' }}>
      <div className="font-mono flex items-center text-6xl pl-0 h-full" style={{ minWidth: `${longestWord.length * 0.647}em` }}>
        <div className="relative inline-block">
          <span className="invisible">{longestWord}</span>
          <span className="capitalize absolute top-0 left-0">{text}</span>
          <span 
            className={cursorClass}
            style={cursorPosition}
          ></span>
        </div>
      </div>
    </div>
  );
});

export default AnimatedText; 