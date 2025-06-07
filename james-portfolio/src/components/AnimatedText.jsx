import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const texts = ["I am EngJamesO", "I am a Drone Engineer", "I am a Drone Pilot", "I am a Machine Learning Engineer", "I am a STEM Advocate"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "I am") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      }
    }, isDeleting ? 90 : 60); // Typing speed vs deleting speed

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, index, texts]);

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '100%' }}>
      <h1>{currentText}</h1>
    </div>
  );
};

export default AnimatedText;
