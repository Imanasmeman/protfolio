import React from 'react';
import profilePic from '../assets/Pass-Photo.jpg';

// Hero Component with animated gradient background and waving hand emoji
const Hero = () => (
  <>
    <style>
      {`
        @keyframes wave {
          0% { transform: rotate(0deg);}
          15% { transform: rotate(14deg);}
          30% { transform: rotate(-8deg);}
          45% { transform: rotate(14deg);}
          60% { transform: rotate(-4deg);}
          75% { transform: rotate(10deg);}
          100% { transform: rotate(0deg);}
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}
    </style>

    <section
      id="hero"
      aria-label="Hero Introduction Section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',

        // Updated animated gradient background without pink/red shades
        backgroundImage:
          'linear-gradient(270deg, #4c51bf, #449d66ff, #56585fff, #4badd7ff, #9466c1ff)',
        backgroundSize: '800% 800%',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 text-center max-w-3xl">
        {/* Profile Picture */}
        <img
          src={profilePic}
          alt="Anasbabu Meman"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 mb-6 md:mb-0"
        />
        {/* Hero Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Hey, I'm Anasbabu Meman{' '}
            <span
              role="img"
              aria-label="waving hand"
              style={{
                display: 'inline-block',
                animation: 'wave 2s infinite',
                transformOrigin: '70% 70%',
              }}
            >
              👋
            </span>
          </h1>
          <h3 className="text-xl md:text-2xl font-light text-indigo-200 mb-8 max-w-xl">
            Aspiring Full Stack Developer & Tech Enthusiast passionate about
            crafting elegant and efficient web applications.
          </h3>

          {/* View My Projects Button */}
          <button
            onClick={() => window.location.href = '/projects'}
            className="mt-4 px-8 py-3 bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-800 transition duration-300 cursor-pointer"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
