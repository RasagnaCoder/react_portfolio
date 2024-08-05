import React, { useState, useEffect } from 'react';

function Typewriter({ texts }) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const text = texts[currentTextIndex];
        const interval = setInterval(() => {
            if (isTyping) {
                if (index < text.length) {
                    setDisplayedText(prevText => prevText + text[index]);
                    setIndex(index + 1);
                } else {
                    setIsTyping(false);
                    clearInterval(interval);
                    // Start erasing after typing is done
                    setTimeout(() => {
                        setIsTyping(true);
                        setDisplayedText('');
                        setIndex(0);
                        setCurrentTextIndex((currentTextIndex + 1) % texts.length); // Cycle through texts
                    }, 2000); // Wait for 2 seconds before starting to erase
                }
            }
        }, 100); // Adjust typing speed here (100ms per character)

        return () => clearInterval(interval);
    }, [index, isTyping, currentTextIndex, texts]);

    return <div className='typewriter'>{displayedText}</div>;
}

export default Typewriter;
