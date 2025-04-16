import { useRef, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
}

export const ParticlesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Resize canvas to fill container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(50, Math.floor(canvas.width * canvas.height / 8000));
    
    // Create particles
    const initParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: theme === 'dark' ? '#6366F1' : '#8385FF',
          alpha: Math.random() * 0.5 + 0.1
        });
      }
    };
    
    // Update particle positions
    const updateParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        let p = particlesArray[i];
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;
      }
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        let p = particlesArray[i];
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
    };
    
    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(99, 102, 241, ${opacity * 0.4})` 
              : `rgba(131, 133, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      updateParticles();
      drawParticles();
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    initParticles();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};
