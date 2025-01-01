import { useState, useEffect } from 'react';

const phrases = [
    'Software Engineer.',
    'Photographer.',
    'Web Developer.',
    'Designer.',
];

const TypewriterText = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    
    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        
        const typeSpeed = isDeleting ? 50 : 100; // Faster deletion than typing
        const delay = isDeleting ? typeSpeed : (text === currentPhrase ? 2000 : typeSpeed);
        
        const timeout = setTimeout(() => {
          if (!isDeleting) {
            if (text === currentPhrase) {
              setIsDeleting(true);
              return;
            }
            setText(currentPhrase.slice(0, text.length + 1));
          } else {
            if (text === '') {
              setIsDeleting(false);
              setPhraseIndex((prev) => (prev + 1) % phrases.length);
              return;
            }
            setText(currentPhrase.slice(0, text.length - 1));
          }
        }, delay);
    
        return () => clearTimeout(timeout);
      }, [text, isDeleting, phraseIndex]);

    // blinking cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530)

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <h1 className="scroll-m-20 pb-2 text-3xl font-medium font-serif tracking-tight first:mt-0">
            I am a   <span>{text}</span>
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity ml-1`}>|</span>
        </h1>
    )
}

export default function IntroSection() {
    return (
        <div className="flex flex-row h-full justify-between p-12">
          <div className="flex items-center">
            <div>
              <h1 className="scroll-m-20 pb-2 text-3xl font-serif font-medium tracking-tight first:mt-0">
                Hello.
              </h1>
              <h1 className="scroll-m-20 text-9xl font-medium font-serif italic tracking-tight">
                My name is.
              </h1>
              <h1 className="scroll-m-20 text-9xl pb-3 font-medium font-serif italic tracking-tight">
                Fabrice.
              </h1>
              <TypewriterText />
            </div>
          </div>
        </div>
      );
}