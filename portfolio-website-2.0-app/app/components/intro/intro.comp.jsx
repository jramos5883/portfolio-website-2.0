"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Intro() {
  const introRef = useRef(null);
  const firstPRef = useRef(null);
  const secondPRef = useRef(null);
  const thirdPRef = useRef(null);
  const fourthPRef = useRef(null);
  const fifthPRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // First Paragraph Animation
            anime({
              targets: firstPRef.current,
              translateY: [100, 0], // Adjust as needed
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 0, // No delay for the first element
            });

            // Second Paragraph Animation
            anime({
              targets: secondPRef.current,
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 300, // Delay (e.g., 300ms after the first element)
            });

            // Third Paragraph Animation
            anime({
              targets: thirdPRef.current,
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 600, // Increase delay for each subsequent element
            });

            // Fourth Paragraph Animation
            anime({
              targets: fourthPRef.current,
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 900,
            });

            // Fifth Paragraph Animation
            anime({
              targets: fifthPRef.current,
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 1200,
            });

            // Optional: Disconnect observer after animation
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
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
    <div ref={introRef} className="intro m-20">
      <p ref={firstPRef} className="text-amber-400 text-3xl py-2">
        Hi, my name is
      </p>
      <p ref={secondPRef} className="text-white text-6xl font-bold py-2">
        John Ramos.
      </p>
      <p ref={thirdPRef} className="text-gray-500 text-6xl font-bold py-2">
        I build things for the web.
      </p>
      <p
        ref={fourthPRef}
        className="text-gray-500 max-w-lg text-2xl indent-8 pb-8"
      >
        I am a Los Angeles based junior software engineer looking to break into
        the tech industry. Currently looking to take on new projects and
        challenges and continue to improve my coding skills and knowledge.
      </p>
      <div ref={fifthPRef}>
        <button className="text-amber-400 border-amber-400 p-2 mr-4 border-4 rounded-lg hover:bg-yellow-700">
          <a href="#id_contact">
            Get In Touch <i className="fa-regular fa-envelope fa-2xl"></i>
          </a>
        </button>
        <a
          className="text-amber-400 border-amber-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
          href="/pdf/JohnRamosTechResume.pdf"
          target="_blank"
        >
          Resume <i className="fa-regular fa-file fa-2xl"></i>
        </a>
      </div>
    </div>
  );
}