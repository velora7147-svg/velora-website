import React, { useEffect, useRef } from 'react';

interface StarFieldProps {
  className?: string;
  count?: number;
  speed?: number;
}

export const StarField: React.FC<StarFieldProps> = ({
  className = '',
  count = 65,
  speed = 0.25,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      targetAlpha: number;
      alphaSpeed: number;
      vx: number;
      vy: number;
      color: string;
    }

    const starColors = [
      'rgba(243, 227, 160, ', // Moon yellow
      'rgba(201, 162, 75, ',  // Gold
      'rgba(245, 241, 232, ', // Off-white
      'rgba(180, 195, 240, ', // Cosmic cool blue
    ];

    const stars: Star[] = Array.from({ length: count }, () => {
      const colorBase = starColors[Math.floor(Math.random() * starColors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.1,
        targetAlpha: Math.random() * 0.8 + 0.2,
        alphaSpeed: (Math.random() * 0.008 + 0.002),
        vx: (Math.random() - 0.5) * speed * 0.3,
        vy: (Math.random() * 0.2 + 0.05) * speed,
        color: colorBase,
      };
    });

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Drift
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle
        if (Math.abs(star.alpha - star.targetAlpha) < 0.02) {
          star.targetAlpha = Math.random() * 0.75 + 0.15;
        } else if (star.alpha < star.targetAlpha) {
          star.alpha += star.alphaSpeed;
        } else {
          star.alpha -= star.alphaSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.alpha})`;
        ctx.shadowBlur = star.size > 1.2 ? 6 : 2;
        ctx.shadowColor = '#F3E3A0';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
