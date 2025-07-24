// // import React, { useEffect, useRef } from "react";
// // import logo from "./assets/harry-potter-bg.jpg";
// // In src/components/MyComponent.jsx (or wherever useEffect/useRef are used)
// import React, { useState, useEffect, useRef } from "react"; // <--- ADD THIS LINE

// // ... rest of your component code
// // import React, { useEffect } from "react";
// // import harry from "../assets/harry-potter-bg.jpg";
// import harryPotterBg from "../assets/harry-potter-bg.jpg";

// // In your JSX:
// <img src={harryPotterBg} alt="Harry Potter Background" />;

// function MyComponent() {
//   return (
//     <div>
//       <h1>My Awesome App</h1>
//       <img src={harry} alt="A description of my image" />
//     </div>
//   );
// }

// // export default MyComponent();

// const StarField: React.FC = () => {
//   const canvasRef = useEffect<HTMLCanvasElement>();

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars: Array<{
//       x: number;
//       y: number;
//       size: number;
//       opacity: number;
//       speed: number;
//     }> = [];

//     // Create stars
//     for (let i = 0; i < 100; i++) {
//       stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 2,
//         opacity: Math.random(),
//         speed: Math.random() * 0.5,
//       });
//     }
//     // import React, { useEffect, useRef } from "react";
//     // import harryBg from "./assets/harry-potter-bg.jpg"; // 🧙‍♂️ Replace with your own image path

//     interface Star {
//       x: number;
//       y: number;
//       size: number;
//       opacity: number;
//       speed: number;
//     }

//     const StarCanvas: React.FC = () => {
//       const canvasRef = useRef<HTMLCanvasElement>(null);
//       const imageRef = useRef<HTMLImageElement | null>(null);

//       useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext("2d");
//         if (!ctx) return;

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const stars: Star[] = Array.from({ length: 100 }, () => ({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           size: Math.random() * 2,
//           opacity: Math.random(),
//           speed: 0.3 + Math.random() * 0.5,
//         }));

//         const animate = () => {
//           if (!imageRef.current) return;

//           // Draw background image
//           ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

//           stars.forEach((star) => {
//             ctx.beginPath();
//             ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
//             ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
//             ctx.fill();

//             // Twinkling effect
//             star.opacity += (Math.random() - 0.5) * 0.02;
//             star.opacity = Math.max(0.1, Math.min(1, star.opacity));

//             // Movement
//             star.y += star.speed;
//             if (star.y > canvas.height) {
//               star.y = 0;
//               star.x = Math.random() * canvas.width;
//             }
//           });

//           requestAnimationFrame(animate);
//         };

//         // Load background image
//         const bgImg = new Image();
//         bgImg.src = harryBg;
//         bgImg.onload = () => {
//           imageRef.current = bgImg;
//           animate();
//         };
//       }, []);

//       return (
//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             display: "block",
//             zIndex: -1,
//           }}
//         />
//       );
//     };

//     // export default StarCanvas;

//     // const animate = () => {
//     //   ctx.clearRect(0, 0, canvas.width, canvas.height);

//     //   stars.forEach(star => {
//     //     ctx.beginPath();
//     //     ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
//     //     ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
//     //     ctx.fill();

//     //     // Twinkling effect
//     //     star.opacity += (Math.random() - 0.5) * 0.02;
//     //     star.opacity = Math.max(0.1, Math.min(1, star.opacity));

//     //     // Slow movement
//     //     star.y += star.speed;
//     //     if (star.y > canvas.height) {
//     //       star.y = 0;
//     //       star.x = Math.random() * canvas.width;
//     //     }
//     //   });

//     //   requestAnimationFrame(animate);
//     // };

//     // animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none z-0"
//       style={{
//         background:
//           "linear-gradient(135deg, #0F1B3C 0%, #1a0033 50%, #000 100%)",
//       }}
//     />
//   );
// };

// export default StarField;

import React, { useEffect, useRef } from "react";
import harryBg from "../public/harry-potter-bg.jpg"; // Make sure this image exists in /assets

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      opacity: Math.random(),
      speed: 0.3 + Math.random() * 0.5,
    }));

    const animate = () => {
      if (!imageRef.current) return;

      // Draw background image
      ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Twinkling
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        // Move
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    // Load background image
    const bgImg = new Image();
    bgImg.src = harryBg;
    bgImg.onload = () => {
      imageRef.current = bgImg;
      animate();
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        zIndex: -1,
        display: "block",
      }}
    />
  );
};

export default StarField;
