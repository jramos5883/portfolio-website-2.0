"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import LinkGridArt from "../LinkGridArt/linkGridArt.comp";

export default function Intro() {
  const introRef = useRef(null);
  const firstPRef = useRef(null);
  const secondPRef = useRef(null);
  const thirdPRef = useRef(null);
  const fourthPRef = useRef(null);
  const fifthPRef = useRef(null);
  const sixthPRef = useRef(null);

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

            // Second Paragraph Animation
            anime({
              targets: secondPRef.current,
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 400, // Delay (e.g., 300ms after the first element)
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
              delay: 800,
            });

            // Fifth Paragraph Animation
            anime({
              targets: fifthPRef.current,
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 1000,
            });

            // Sixth Paragraph Animation
            anime({
              targets: sixthPRef.current,
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

  // Contact button is hidden until I can fix the Contact Form

  return (
    <div
      id="id_intro"
      className="m-8 tablet:m-20 max-tablet:flex max-tablet:flex-col max-tablet:justify-center max-tablet:items-center laplg:flex laplg:flex-row laplg:items-center lapxl:mx-52 desksm:mx-80 desklg:mr-96 desklg:ml-96"
    >
      <div ref={introRef} className="" style={{ opacity: 0 }}>
        <div ref={firstPRef} className="flex flex-wrap pb-4">
          <a href="#id_aboutMe">
            <p className="text-2xl text-amber-400 border-amber-400 p-2 m-1 border-4 rounded-lg hover:bg-yellow-700">
              01. <span className="text-2xl text-white">About Me</span>
            </p>
          </a>
          <a href="#id_projects">
            <p className="text-2xl text-amber-400 border-amber-400 p-2 m-1 border-4 rounded-lg hover:bg-yellow-700">
              02. <span className="text-2xl text-white">Projects</span>
            </p>
          </a>
          <a href="#id_contact">
            <p className="hidden text-2xl text-amber-400 border-amber-400 p-2 m-1 border-4 rounded-lg hover:bg-yellow-700">
              03.
              <span className="text-2xl text-white">Contact Form</span>
            </p>
          </a>
        </div>
        <p ref={secondPRef} className="text-amber-400 text-3xl py-2">
          Hi, my name is
        </p>
        <p ref={thirdPRef} className="text-white text-6xl font-bold py-2">
          John Ramos.
        </p>
        <p ref={fourthPRef} className="text-gray-500 text-6xl font-bold py-2">
          I build things for the web.
        </p>
        <p
          ref={fifthPRef}
          className="text-gray-500 max-w-lg text-2xl indent-8 pb-4"
        >
          I am a Los Angeles based software engineer looking to break into the
          tech industry. Currently looking to take on new projects and
          challenges and continue to improve my coding skills and knowledge.
        </p>
        <div className="flex flex-wrap mb-8" ref={sixthPRef}>
          <button className="text-2xl text-amber-400 border-yellow-400 p-2 m-1 border-4 rounded-lg hover:bg-yellow-700">
            <a href="/pdf/JohnRamosTechResumeV4.pdf" target="_blank">
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
      <div className="flex justify-center items-center">
        <LinkGridArt />
      </div>
    </div>
  );
}
