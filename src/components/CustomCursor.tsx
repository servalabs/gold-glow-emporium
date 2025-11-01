import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.05s ease-out',
        }}
      >
        <div
          className={`w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold transition-all duration-300 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>
      <div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div
          className={`border border-gold/50 rounded-full transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
            isHovering ? 'w-12 h-12' : 'w-8 h-8'
          }`}
        />
      </div>
    </>
  );
};
