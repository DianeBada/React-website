import React, { useEffect, useRef } from 'react';

function DataArt() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const imagesRef = useRef([]);
  const activeParticlesRef = useRef([]);
  const mousePosRef = useRef({ x: -100, y: -100 });
  let flashing = true;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const numParticles = 100;
    const particleRadius = 20;
    const particleSpeed = 3;
    const particleBounce = 0.9;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles with random positions, velocities, and colors
    for (let i = 0; i < numParticles; i++) {
      const particle = {
        x: Math.random() * (canvas.width - 2 * particleRadius) + particleRadius,
        y: Math.random() * (canvas.height - 2 * particleRadius) + particleRadius,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        color: getRandomColor(),
        memeUrl: null,
        isMemeVisible: false
      };
      particles.push(particle);
    }

    particlesRef.current = particles;

    function getRandomColor() {
      const colors = ['#FF3E4D', '#25D2A6', '#FFC300', '#8D3DAF', '#00C1FF'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off the walls
        if (
          particle.x - particleRadius <= 0 ||
          particle.x + particleRadius >= canvas.width
        ) {
          particle.vx *= -particleBounce;
        }
        if (
          particle.y - particleRadius <= 0 ||
          particle.y + particleRadius >= canvas.height
        ) {
          particle.vy *= -particleBounce;
        }
      }
    }

    function handleMouseClick(event) {
      const canvasRect = canvas.getBoundingClientRect();
      const clickX = event.clientX - canvasRect.left;
      const clickY = event.clientY - canvasRect.top;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const dx = clickX - particle.x;
        const dy = clickY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= particleRadius) {
          if (!particle.isMemeVisible) {
            // Render meme
            if (imagesRef.current.length > 0) {
              const randomIndex = Math.floor(Math.random() * imagesRef.current.length);
              const memeUrl = imagesRef.current[randomIndex];
              particle.memeUrl = memeUrl;
              particle.isMemeVisible = true;
              activeParticlesRef.current.push(particle);
              imagesRef.current.splice(randomIndex, 1);

              // Create a new image element
              const img = new Image();
              img.src = memeUrl;

              img.onload = () => {
                let imgWidth = img.width;
                let imgHeight = img.height;
              
                // Calculate the offset dimensions
                const canvasOffsetWidth = canvas.width - 10;
                const canvasOffsetHeight = canvas.height - 10;
              
                // Check if image size exceeds canvas size with offset
                if (imgWidth > canvasOffsetWidth || imgHeight > canvasOffsetHeight) {
                  const aspectRatio = imgWidth / imgHeight;
              
                  // Reduce image size proportionally to fit within the canvas with offset
                  if (imgWidth > canvasOffsetWidth) {
                    imgWidth = canvasOffsetWidth;
                    imgHeight = imgWidth / aspectRatio;
                  }
                  if (imgHeight > canvasOffsetHeight) {
                    imgHeight = canvasOffsetHeight;
                    imgWidth = imgHeight * aspectRatio;
                  }
                }
              
                // Calculate the position to draw the image
                let centerX = canvas.width / 2 - imgWidth / 2;
                let centerY = canvas.height / 2 - imgHeight / 2;
              
                // Draw the image on the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, centerX, centerY, imgWidth, imgHeight);
              
                // Reset particle visibility after 4 seconds
                setTimeout(() => {
                  particle.isMemeVisible = false;
                  particle.memeUrl = null;
                  activeParticlesRef.current = activeParticlesRef.current.filter(p => p !== particle);
                  drawParticles();
                }, 4000);
              };
              
            }
          }
          break;
        }
      }
    }

    function handleMouseMove(event) {
      const canvasRect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: event.clientX - canvasRect.left,
        y: event.clientY - canvasRect.top
      };
    }

    canvas.addEventListener('click', handleMouseClick);
    canvas.addEventListener('mousemove', handleMouseMove);

    // Fetch images from subreddit
    fetch('https://www.reddit.com/r/collegememes/.json?limit=50')
      .then(response => response.json())
      .then(data => {
        const imagePosts = data.data.children.filter(
          post => post.data.post_hint === 'image'
        );
        imagesRef.current = imagePosts.map(post => post.data.url);
      })
      .catch(error => console.error(error));

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateParticles();
      drawParticles();

      if (activeParticlesRef.current.length > 0) {
        // Draw active particles with memes
        for (let i = 0; i < activeParticlesRef.current.length; i++) {
          const particle = activeParticlesRef.current[i];

          // Draw the particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particleRadius, 0, 2 * Math.PI);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();

          // Draw the meme image
          if (particle.isMemeVisible && particle.memeUrl) {
            const img = new Image();
            img.src = particle.memeUrl;
            const centerX = canvas.width / 2 - img.width / 2;
            const centerY = canvas.height / 2 - img.height / 2;
            ctx.drawImage(img, centerX, centerY, img.width, img.height);
          }
        }
      }

      // Change cursor style when hovering over particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const dx = mousePosRef.current.x - particle.x;
        const dy = mousePosRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= particleRadius) {
          canvas.style.cursor = 'pointer';
          break;
        } else {
          canvas.style.cursor = 'default';
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      canvas.removeEventListener('click', handleMouseClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="galaxy" />;
}

export default DataArt;
