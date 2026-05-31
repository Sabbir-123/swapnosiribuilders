"use client";

import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Edge {
  a: number;
  b: number;
  type: "column" | "beam" | "brace";
}

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays
    let width = 0;
    let height = 0;
    const resizeCanvas = () => {
      const parent = containerRef.current;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate Skyscraper 3D Structure Points
    const vertices: Point3D[] = [];
    const edges: Edge[] = [];

    const floors = 16;
    const pointsPerFloor = 6; // Hexagonal floor plates for futuristic look
    const floorHeight = 28;
    const baseRadius = 130;

    // Create vertices
    for (let f = 0; f < floors; f++) {
      const t = f / (floors - 1);
      // Taper the skyscraper near the top
      const scale = 1 - t * 0.55; 
      const radius = baseRadius * scale;
      const y = - (f * floorHeight) + (floors * floorHeight) / 2 - 50;

      for (let p = 0; p < pointsPerFloor; p++) {
        const angle = (p / pointsPerFloor) * Math.PI * 2;
        vertices.push({
          x: Math.cos(angle) * radius,
          y: y,
          z: Math.sin(angle) * radius,
        });
      }
    }

    // Add a structural spire at the top
    const topY = - (floors * floorHeight) + (floors * floorHeight) / 2 - 50 - 45;
    vertices.push({ x: 0, y: topY, z: 0 }); // Spire tip is the last vertex
    const spireIndex = vertices.length - 1;

    // Connect edges
    for (let f = 0; f < floors; f++) {
      const floorStart = f * pointsPerFloor;

      // Beams (Horizontal floor plate outlines)
      for (let p = 0; p < pointsPerFloor; p++) {
        const nextP = (p + 1) % pointsPerFloor;
        edges.push({
          a: floorStart + p,
          b: floorStart + nextP,
          type: "beam",
        });

        // Dynamic center-beams for structure
        if (p < pointsPerFloor / 2) {
          edges.push({
            a: floorStart + p,
            b: floorStart + ((p + pointsPerFloor / 2) % pointsPerFloor),
            type: "beam",
          });
        }
      }

      // Columns (Vertical connections between floors)
      if (f < floors - 1) {
        const nextFloorStart = (f + 1) * pointsPerFloor;
        for (let p = 0; p < pointsPerFloor; p++) {
          edges.push({
            a: floorStart + p,
            b: nextFloorStart + p,
            type: "column",
          });

          // X-Bracing for BNBC earthquake and wind resistance (every 3rd floor block)
          if (f % 2 === 0) {
            const nextP = (p + 1) % pointsPerFloor;
            edges.push({
              a: floorStart + p,
              b: nextFloorStart + nextP,
              type: "brace",
            });
            edges.push({
              a: floorStart + nextP,
              b: nextFloorStart + p,
              type: "brace",
            });
          }
        }
      }
    }

    // Connect top floor to the spire
    const topFloorStart = (floors - 1) * pointsPerFloor;
    for (let p = 0; p < pointsPerFloor; p++) {
      edges.push({
        a: topFloorStart + p,
        b: spireIndex,
        type: "column",
      });
    }

    // Interactive mouse state
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / width - 0.5) * 2; // -1 to 1
      mouse.targetY = (clientY / height - 0.5) * 2; // -1 to 1
    };

    window.addEventListener("mousemove", onMouseMove);

    // Scroll state
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Current angle state for smooth interpolation (lerping)
    let angleX = -0.3;
    let angleY = 0.5;

    // Animation Loop
    let animationFrameId: number;

    const render = () => {
      // Lerp angles for inertia effect
      angleY += (mouse.targetX * 0.6 + scrollY * 0.001 - angleY) * 0.08;
      angleX += (-mouse.targetY * 0.4 - 0.2 - angleX) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Camera settings
      const focalLength = 380;
      const centerX = width / 2;
      const centerY = height / 2 + 30;

      // Project 3D points to 2D screen space
      const projected = vertices.map((v) => {
        // Rotate around Y axis
        let x1 = v.x * Math.cos(angleY) - v.z * Math.sin(angleY);
        let z1 = v.x * Math.sin(angleY) + v.z * Math.cos(angleY);

        // Rotate around X axis
        let y2 = v.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = v.y * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Translate camera depth (push back)
        const cameraDepth = 400;
        const finalZ = z2 + cameraDepth;

        // Perspective scaling
        const scale = focalLength / Math.max(1, finalZ);
        return {
          x: centerX + x1 * scale,
          y: centerY + y2 * scale,
          z: finalZ,
          scale: scale,
        };
      });

      // Draw Edges
      edges.forEach((edge) => {
        const p1 = projected[edge.a];
        const p2 = projected[edge.b];

        // Back-face clipping check or depth fading
        const avgDepth = (p1.z + p2.z) / 2;
        const opacity = Math.max(0.04, Math.min(0.55, 1 - (avgDepth - 250) / 350));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (edge.type === "beam") {
          ctx.strokeStyle = `rgba(212, 160, 23, ${opacity * 0.6})`;
          ctx.lineWidth = 0.9;
        } else if (edge.type === "column") {
          ctx.strokeStyle = `rgba(11, 46, 91, ${opacity * 1.2})`;
          ctx.lineWidth = 1.4;
        } else {
          // Structural Wind/Earthquake Braces (accent gold)
          ctx.strokeStyle = `rgba(212, 160, 23, ${opacity * 0.95})`;
          ctx.lineWidth = 0.8;
          ctx.setLineDash([2, 4]); // Dashed engineering style
        }

        ctx.stroke();
        ctx.setLineDash([]); // Reset
      });

      // Draw Vertices (structural nodes)
      projected.forEach((p) => {
        const size = Math.max(1.5, Math.min(4.5, (400 / p.z) * 2.2));
        const opacity = Math.max(0.1, Math.min(0.9, 1 - (p.z - 250) / 300));

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        
        // Render nodes as glowing luxury gold dots
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 2);
        grad.addColorStop(0, `rgba(255, 220, 110, ${opacity})`);
        grad.addColorStop(0.3, `rgba(214, 160, 23, ${opacity * 0.8})`);
        grad.addColorStop(1, "rgba(214, 160, 23, 0)");
        
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden select-none pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
