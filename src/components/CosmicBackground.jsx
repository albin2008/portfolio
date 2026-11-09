import React, { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 6000);
    const stars = Array.from({ length: Math.min(starCount, 220) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.85 ? '#FFD166' : Math.random() > 0.7 ? '#A78BFA' : '#FFFFFF',
    }));

    // Shooting stars
    const shootingStars = [];
    const createShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.015) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 12,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          alpha: 1,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render stars
      stars.forEach((star) => {
        star.alpha += star.speed * star.direction;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.direction *= -1;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.radius > 1 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.restore();
      });

      // Update and draw shooting stars
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        ctx.save();
        ctx.beginPath();
        const endX = s.x - Math.cos(s.angle) * s.length;
        const endY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, endX, endY);
        grad.addColorStop(0, `rgba(255, 230, 160, ${s.alpha})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.02;

        if (s.alpha <= 0 || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Space Void Base with Nebula Clouds */}
      <div className="absolute inset-0 bg-[#040407] transition-colors" />

      {/* Cosmic Nebula Gradients */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-to-b from-[#ff8c00]/12 via-[#7928ca]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#4f46e5]/10 via-[#ec4899]/8 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[65%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 via-[#3b82f6]/6 to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* Interactive Twinkling Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

