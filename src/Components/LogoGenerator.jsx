import React, { useEffect, useRef } from 'react';

const LogoGenerator = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = 512; // High Resolution PNG (512x512)

    canvas.width = size;
    canvas.height = size;

    // --- 1. Background (Transparent rakha hai taaki website pe blend ho) ---
    ctx.clearRect(0, 0, size, size);

    // --- 2. Gradient Colors (Teal to Cyan - Tera Brand Color) ---
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#0d9488'); // Teal-600
    gradient.addColorStop(1, '#06b6d4'); // Cyan-500

    // --- 3. Outer Hexagon Shape ---
    ctx.beginPath();
    const numberOfSides = 6;
    const radius = size / 2 - 20;
    const xCenter = size / 2;
    const yCenter = size / 2;

    for (let i = 1; i <= numberOfSides; i++) {
        const angle = i * 2 * Math.PI / numberOfSides;
        const x = xCenter + radius * Math.cos(angle);
        const y = yCenter + radius * Math.sin(angle);
        if (i === 1) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    
    // Fill Hexagon with White
    ctx.fillStyle = '#ffffff'; 
    ctx.fill();
    
    // Border for Hexagon
    ctx.lineWidth = 15;
    ctx.strokeStyle = gradient;
    ctx.stroke();

    // --- 4. Draw "Z" Letter ---
    ctx.font = 'bold 300px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = gradient;
    
    // Thoda Shadow effect taaki 3D lage
    ctx.shadowColor = "rgba(0,0,0,0.2)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    // Draw Z in center
    ctx.fillText('Z', size / 2, size / 2 + 20);

    // --- 5. Auto Download Logic ---
    const imageURL = canvas.toDataURL('image/png');
    
    // Create fake link and click it
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'zichverse-logo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] flex-col text-white">
      <h2 className="text-2xl font-bold mb-4">Generating Your PNG Logo...</h2>
      <canvas ref={canvasRef} className="border-4 border-white rounded-xl shadow-2xl" />
      <p className="mt-4 text-cyan-300">Check your downloads folder!</p>
    </div>
  );
};

export default LogoGenerator;