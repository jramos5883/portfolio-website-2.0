"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Footer() {
  const introRef = useRef(null);
  const firstPRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Intro Animation for the whole section
            anime({
              targets: introRef.current,
              opacity: [0, 1],
              duration: 100,
              easing: "easeInOutExpo",
            });

            // First Paragraph Animation
            anime({
              targets: firstPRef.current,
              translateY: [100, 0], // Adjust as needed
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 200, // No delay for the first element
            });

            // Optional: Disconnect observer after animation
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={introRef} className="" style={{ opacity: 0 }}>
      <div
        ref={firstPRef}
        className="flex flex-col justify-center items-center mb-8"
      >
        <div className="flex flex-wrap m-8">
          <a href="#id_intro">
            <p className="text-2xl text-amber-400 border-amber-400 p-2 m-1 border-4 rounded-lg hover:bg-yellow-700">
              00. <span className="text-2xl text-white">Intro</span>
            </p>
          </a>
          <button className="text-2xl text-amber-400 border-yellow-400 p-2 m-1 border-4 rounded-lg hover:bg-yellow-700">
            <a href="/pdf/JohnRamosTechResume.pdf" target="_blank">
              Resume <i className="fa-regular fa-file fa-2xl"></i>
            </a>
          </button>
          <button className="text-2xl text-amber-400 border-yellow-400 p-2 m-1 border-4 rounded-lg hover:bg-yellow-700">
            <a
              href="https://www.linkedin.com/in/jrprodev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked&apos;in <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </button>
          <button className="text-2xl text-amber-400 border-yellow-400 p-2 m-1 border-4 rounded-lg hover:bg-yellow-700">
            <a
              href="https://github.com/jramos5883"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
