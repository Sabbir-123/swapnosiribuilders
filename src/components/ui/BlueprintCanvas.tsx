"use client";

import React, { useRef, useEffect } from "react";

export default function BlueprintCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Particle class for coordinate nodes
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      vx: number;
      vy: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
        this.density = Math.random() * 20 + 5;
      }

      update() {
        // Subtle floating drift
        this.baseX += this.vx;
        this.baseY += this.vy;

        // Bounce inside boundaries
        if (this.baseX < 0 || this.baseX > width) this.vx *= -1;
        if (this.baseY < 0 || this.baseY > height) this.vy *= -1;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.hypot(dx, dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouseRef.current.radius;
          const force = (maxDistance - distance) / maxDistance;

          if (distance < maxDistance) {
            // Pull particles slightly towards mouse (Apple style gravity)
            this.x += forceDirectionX * force * 1.5;
            this.y += forceDirectionY * force * 1.5;
          } else {
            // Return to base position
            if (this.x !== this.baseX) {
              const dxBase = this.x - this.baseX;
              this.x -= dxBase / 15;
            }
            if (this.y !== this.baseY) {
              const dyBase = this.y - this.baseY;
              this.y -= dyBase / 15;
            }
          }
        } else {
          // Return to base position
          if (this.x !== this.baseX) {
            const dxBase = this.x - this.baseX;
            this.x -= dxBase / 15;
          }
          if (this.y !== this.baseY) {
            const dyBase = this.y - this.baseY;
            this.y -= dyBase / 15;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = "rgba(212, 160, 23, 0.25)";
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.closePath();
        c.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 18000));

    // Populate particles randomly
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(Math.random() * width, Math.random() * height));
    }

    // 3D Isometric Cube Rotation Math
    let angle = 0;
    const cubeSize = Math.min(100, width * 0.15);
    const cubeCenter = { x: width * 0.85, y: height * 0.5 };

    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    const cubeVertices: Point3D[] = [
      { x: -1, y: -1, z: -1 },
      { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },
      { x: -1, y: 1, z: 1 },
    ];

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7], // Connecting edges
    ];

    function project3D(pt: Point3D, currentAngle: number): { x: number; y: number } {
      // Rotate on Y and X axis
      const radY = currentAngle * 0.3;
      const radX = currentAngle * 0.15;

      // Y Rotation
      let x = pt.x * Math.cos(radY) - pt.z * Math.sin(radY);
      let z = pt.x * Math.sin(radY) + pt.z * Math.cos(radY);
      let y = pt.y;

      // X Rotation
      const tempY = y * Math.cos(radX) - z * Math.sin(radX);
      z = y * Math.sin(radX) + z * Math.cos(radX);
      y = tempY;

      // Perspective projection
      const distance = 4;
      const scale = (distance / (distance + z)) * cubeSize;
      
      return {
        x: cubeCenter.x + x * scale,
        y: cubeCenter.y + y * scale,
      };
    }

    // Handle mouse move listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle grid background
      ctx.strokeStyle = "rgba(212, 160, 23, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw rotating architectural 3D wireframe building cube on the right
      angle += 0.003;
      cubeCenter.x = width * 0.85; // Recalculate based on screen size
      cubeCenter.y = height * 0.5;

      ctx.strokeStyle = "rgba(212, 160, 23, 0.08)";
      ctx.lineWidth = 0.8;
      
      const projectedVertices = cubeVertices.map((v) => project3D(v, angle));

      // Draw cube edges
      cubeEdges.forEach(([start, end]) => {
        const p1 = projectedVertices[start];
        const p2 = projectedVertices[end];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw glowing corner ticks
      ctx.fillStyle = "rgba(212, 160, 23, 0.25)";
      projectedVertices.forEach((v) => {
        ctx.beginPath();
        ctx.arc(v.x, v.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw subtle drafting coordinates at the bottom of the cube
      ctx.fillStyle = "rgba(212, 160, 23, 0.2)";
      ctx.font = "8px monospace";
      ctx.fillText(
        `ELEV_ROT: ${(angle % (Math.PI * 2)).toFixed(2)} RAD`,
        cubeCenter.x - 50,
        cubeCenter.y + cubeSize + 20
      );
      ctx.fillText(
        `X_GRID: ${cubeCenter.x.toFixed(0)}m / Y_GRID: ${cubeCenter.y.toFixed(0)}m`,
        cubeCenter.x - 50,
        cubeCenter.y + cubeSize + 32
      );

      // 3. Update & Draw Particles (Apple WebGL Particle Mesh mock)
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Connect close particles with blueprint lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 110) {
            const alpha = (110 - dist) / 110 * 0.08;
            ctx.strokeStyle = `rgba(212, 160, 23, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0 select-none transition-opacity duration-500"
    />
  );
}
