
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  words,
  typingSpeed = 150,
  erasingSpeed = 100,
  delayBetweenWords = 1500,
  className = '',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      // If we're typing and haven't completed the word
      if (currentText.length < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(words[currentWordIndex].substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // We've finished typing the word, wait before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenWords);
      }
    } else {
      // If we're erasing and haven't erased all characters
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, erasingSpeed);
      } else {
        // We've finished erasing, move to next word
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, delayBetweenWords, erasingSpeed, isTyping, typingSpeed, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
