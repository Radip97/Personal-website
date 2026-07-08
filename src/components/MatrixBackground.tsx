"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Orange-themed characters for Matrix rain matching his accent color
    const chars = "010101010101010101010101ABCDEF";
    let cols = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / 20);
      drops = new Array(cols).fill(1);
    };

    const draw = () => {
      // Semi-transparent black paint creates the trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Neon orange color matching '--accent' #fd6f00
      ctx.fillStyle = "#fd6f00";
      ctx.font = "14px Courier New, monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Draw the character
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop back to top once it hits bottom (with randomized delay)
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    window.addEventListener("resize", resize);
    resize();

    // Loop
    const interval = setInterval(draw, 33); // ~30 FPS for smooth rendering

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "#000000",
      }}
    />
  );
}
