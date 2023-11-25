"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";

export default function AboutMe() {
  const introRef = useRef(null);
  const firstPRefDesktop = useRef(null); // Ref for desktop image
  const firstPRefMobile = useRef(null); // Ref for mobile image
  const secondPRef = useRef(null);
  const thirdPRef = useRef(null);
  const fourthPRef = useRef(null);

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
              targets: [firstPRefDesktop.current, firstPRefMobile.current],
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 200,
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
    <div
      id="id_aboutMe"
      ref={introRef}
      className="m-8 tablet:mx-20 tablet:mt-20 lapsm:mt-48 lapsm:flex lapsm:flex-row lapsm:justify-center lapxl:mx-52 desksm:mx-80 desksm:mt-80 desklg:mr-96 desklg:ml-96"
      style={{ opacity: 0 }}
    >
      {/* Initial hidden state */}

      <div className="lapsm:w-3/5">
        <div
          ref={firstPRefMobile}
          className="flex flex-col justify-center items-center"
        >
          <p className="lapsm:hidden text-amber-400 text-3xl pb-4">
            01. <span className="text-white">About Me</span>
          </p>
          <Image
            className="border-yellow-400 border-4 rounded-lg max-w-xs mb-8 tablet:mb-16 tablet:max-w-sm lapsm:hidden"
            layout="responsive"
            height={500}
            width={500}
            src="/images/headshot.jpg"
            alt="Picture of a happy software engineer!"
          />
        </div>
        <div
          ref={secondPRef}
          className="flex flex-col justify-center items-center"
        >
          <p className="hidden lapsm:block text-amber-400 text-3xl pb-4">
            01. <span className="text-white">About Me</span>
          </p>
          <p className="text-gray-500 text-2xl indent-8 py-2">
            Hi, I&apos;m John - a lifelong learner with a passion for science
            and technology. My early career as an EMT, Paramedic, and
            Firefighter Paramedic was driven by my love of science and the human
            body. But as I continued to explore the world of tech and
            programming, I found myself captivated by the endless possibilities
            for innovation and problem-solving. While I enjoyed the fast paced
            and hands-on work of emergency medicine, my true passion for tech
            was sparked by my introduction to coding. Now, as a software
            engineer, I bring a unique blend of analytical thinking and
            scientific curiosity to every project I work on.
          </p>
        </div>
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
      </div>
      <div
        ref={firstPRefDesktop}
        className="lapsm:w-2/5 flex flex-col items-center"
      >
        <Image
          className="border-yellow-400 border-4 rounded-lg max-w-xs tablet:max-w-sm hidden lapsm:block lapsm:ml-8 lapsm:mt-4 lapsm:max-w-md laplg:max-w-lg"
          layout="responsive"
          height={500}
          width={500}
          src="/images/headshot.jpg"
          alt="Picture of a happy software engineer!"
        />
      </div>
    </div>
  );
}
