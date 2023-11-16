"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function AboutMe() {
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
            // Intro Animation for the whole section
            anime({
              targets: introRef.current,
              opacity: [0, 1],
              duration: 1000,
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

            // Optional: Disconnect observer after animation
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05 }
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
    <div ref={introRef} className="m-20" style={{ opacity: 0 }}>
      {/* Initial hidden state */}
      <div className="w-2/3">
        <p ref={firstPRef} className="text-amber-400 text-3xl py-2">
          01. <span className="text-white">About Me</span>
        </p>
        <p ref={secondPRef} className="text-gray-500 text-2xl indent-8 py-2">
          Hi, I&apos;m John - a lifelong learner with a passion for science and
          technology. My early career as an EMT, Paramedic, and Firefighter
          Paramedic was driven by my love of science and the human body. But as
          I continued to explore the world of tech and programming, I found
          myself captivated by the endless possibilities for innovation and
          problem-solving. While I enjoyed the fast paced and hands-on work of
          emergency medicine, my true passion for tech was sparked by my
          introduction to coding. Now, as a software engineer, I bring a unique
          blend of analytical thinking and scientific curiosity to every project
          I work on.
        </p>
        <p ref={thirdPRef} className="text-gray-500 text-2xl indent-8 py-2">
          As a self-taught developer, I have embraced the challenges and rewards
          of learning code through trial and error and hands-on experience. With
          a strong focus on front-end development, I am constantly pushing
          myself to learn new skills and explore new technologies. Currently I
          am working on mastering React.js while also refining my knowledge of
          backend development. My goal is to become a full-stack developer and
          bring my expertise to a dynamic team that values innovation and
          creativity.
        </p>
        <p ref={fourthPRef} className="text-gray-500 text-2xl indent-8 py-2">
          As I continue to grow and develop my skills as a software engineer, I
          am excited to bring my diverse background and strong work ethic to the
          tech industry. With my unique combination of medical expertise and
          technical skills, I am confident that I would be a valuable asset to
          any buisness looking for a passionate, knowlegable, and adaptable team
          member.
        </p>
        <div ref={fifthPRef} className="py-8">
          <button className="text-amber-400 border-yellow-400 p-2 mr-4 border-4 rounded-lg hover:bg-yellow-700">
            <a
              href="https://www.linkedin.com/in/jrprodev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked&apos;in <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </button>
          <button className="text-amber-400 border-yellow-400 p-2 mr-4 border-4 rounded-lg hover:bg-yellow-700">
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
