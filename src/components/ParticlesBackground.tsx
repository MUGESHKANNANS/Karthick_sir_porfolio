import React, { useCallback, useEffect } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import type { Engine } from 'tsparticles-engine';
import { useTheme } from '../contexts/ThemeContext';

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    return () => {
      // Cleanup particles when component unmounts
      const particlesContainer = document.getElementById('tsparticles-hero');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full h-full pointer-events-none">
      <Particles
        id="tsparticles-hero"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#8e2de2", "#4a00e0", "#ffffff"], // Blue-purple gradient with white
            },
            links: {
              color: theme === 'dark' ? "#ffffff" : "#8e2de2",
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
              },
            },
            collisions: {
              enable: true,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
