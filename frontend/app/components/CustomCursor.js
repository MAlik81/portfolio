'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Only on true pointer devices
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId;
    let visible = false;

    const show = () => {
      if (!visible) {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        visible = true;
      }
    };

    const hide = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      visible = false;
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px,${mouseY}px)`;
      show();
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.11;
      ringY += (mouseY - ringY) * 0.11;
      ring.style.transform = `translate(${ringX}px,${ringY}px)`;
      frameId = requestAnimationFrame(animate);
    };

    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);
    frameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
      cancelAnimationFrame(frameId);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
