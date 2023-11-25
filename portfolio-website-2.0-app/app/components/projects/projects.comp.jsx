"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
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
              translateX: [-200, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 400, // Delay (e.g., 300ms after the first element)
            });

            // Third Paragraph Animation
            anime({
              targets: thirdPRef.current,
              translateX: [200, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 600, // Increase delay for each subsequent element
            });

            // Fourth Paragraph Animation
            anime({
              targets: fourthPRef.current,
              translateX: [-200, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 800,
            });

            // Fifth Paragraph Animation
            anime({
              targets: fifthPRef.current,
              translateX: [200, 0],
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
      id="id_projects"
      className="flex flex-col justify-center items-center m-8 lapxl:mx-52 desksm:mx-80 desksm:mt-80 desklg:mr-96 desklg:ml-96 mb-24"
    >
      <div
        ref={introRef}
        className="flex flex-col items-center"
        style={{ opacity: 0 }}
      >
        <div ref={firstPRef} className="">
          <p className="text-amber-400 text-3xl mb-8">
            02. <span className="text-white">Projects</span>
          </p>
        </div>
        <div className="grid lapsm:grid-rows-2 lapsm:grid-cols-2 gap-8 laplg:gap-16 desksm:gap-32">
          <div ref={secondPRef} className="flex flex-col items-center">
            <p className="text-amber-400 text-3xl mb-4">CozyCupid</p>
            <Image
              className="border-yellow-400 border-4 rounded-lg mb-8 max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg laplg:max-w-xl laplg:max-h-xl lapxl:max-w-2xl lapxl:max-h-2xl desksm:max-w-3xl desksm:max-h-3xl desklg:max-w-6xl desklg:max-h-6xl"
              layout="responsive"
              height={500}
              width={500}
              src="/images/cozyCupidWebsite.png"
              alt="CozyCupid Website"
            />
            <div className="text-2xl mb-8">
              <Link
                href="https://www.cozycupid.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
              >
                Live Site
              </Link>
            </div>
            <div className="text-gray-500 text-2xl mb-4 celllg:max-w-sm tablet:max-w-md lapsm:max-w-lg desksm:max-w-2xl desklg:max-w-3xl">
              <ul>
                <li className="">
                  - Lead meetings with clients and contributed to creating the
                  brand of the company&apos;s product.
                </li>
                <li className="">
                  - Utilized FormSubmit to create a contact form that sends
                  emails directnly to the clients invoice.
                </li>
                <li className="">
                  - Collaborated with clients to build a responsive website that
                  fulfilled all of the buisness needs of the company.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap">
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                React
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Next.js
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Vercel
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Tailwind
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                FormSubmit
              </p>
            </div>
          </div>
          <div ref={thirdPRef} className="flex flex-col items-center">
            <p className="text-amber-400 text-3xl mb-4">Poke To The Moon</p>
            <Image
              className="border-yellow-400 border-4 rounded-lg mb-8 max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg laplg:max-w-xl laplg:max-h-xl lapxl:max-w-2xl lapxl:max-h-2xl desksm:max-w-3xl desksm:max-h-3xl desklg:max-w-6xl desklg:max-h-6xl"
              layout="responsive"
              height={500}
              width={500}
              src="/images/portfolioPttM.png"
              alt="Poke To The Moon"
            />
            <div className="text-2xl mb-8">
              <Link
                href="https://www.poketothemoon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
              >
                Live Site
              </Link>
            </div>
            <div className="text-gray-500 text-2xl mb-4 celllg:max-w-sm tablet:max-w-md lapsm:max-w-lg desksm:max-w-2xl desklg:max-w-3xl">
              <ul>
                <li className="">
                  - Spearheaded collaboration with restaurant owners,
                  meticulously shaping the digital representation of their
                  business to perfectly align with their vision and goals.
                </li>
                <li className="">
                  - Employed responsive design principles using Tailwind CSS,
                  ensuring optimal webpage presentation across various devices
                  for a seamless user experience.
                </li>
                <li className="">
                  - Utilized the Google Maps Embedded API, offering an
                  intuitive, user-friendly tool for customers to effortlessly
                  locate the restaurant.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap">
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                React
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Next.js
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Firebase
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Tailwind
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Vercel
              </p>
            </div>
          </div>
          <div ref={fourthPRef} className="flex flex-col items-center">
            <p className="text-amber-400 text-3xl mb-4">
              Poseidon&apos;s Dashboard
            </p>
            <Image
              className="border-yellow-400 border-4 rounded-lg mb-8 max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg laplg:max-w-xl laplg:max-h-xl lapxl:max-w-2xl lapxl:max-h-2xl desksm:max-w-3xl desksm:max-h-3xl desklg:max-w-6xl desklg:max-h-6xl"
              layout="responsive"
              height={500}
              width={500}
              src="/images/portfolioDashboard.png"
              alt="Personal Dashboard"
            />
            <div className="text-2xl mb-8">
              <Link
                href="https://dashboard-kappa-blue.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
              >
                Live Site
              </Link>
            </div>
            <div className="text-gray-500 text-2xl mb-4 celllg:max-w-sm tablet:max-w-md lapsm:max-w-lg desksm:max-w-2xl desklg:max-w-3xl">
              <ul>
                <li className="">
                  - Brainstormed, designed, built, and deployed a fully
                  functioning personal dashboard app created with orginization,
                  productivity, and efficency in mind.
                </li>
                <li className="">
                  - Used NextAuth.js and Google OAuth to handle user sign in,
                  manage authentication, and establish protected routes.
                </li>
                <li className="">
                  - Deployed Firebase&apos;s serverless backend to allow for
                  data, file, and image storage for the dashboard.
                </li>
                <li className="">
                  - Created a Dota 2 Pro Match Tracker that displays recent pro
                  Dota 2 matches and is able to search for specefic pro teams.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap">
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                React
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Next.js
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Firebase
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                NextAuth.js
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Tailwind
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Vercel
              </p>
            </div>
          </div>
          <div ref={fifthPRef} className="flex flex-col items-center">
            <p className="text-amber-400 text-3xl mb-4">Blog Website</p>
            <Image
              className="border-yellow-400 border-4 rounded-lg mb-8 max-w-xs max-h-xs cellsm:max-w-sm cellsm:max-h-sm tablet:max-w-md tablet:max-h-md lapsm:max-w-lg lapsm:max-h-lg laplg:max-w-xl laplg:max-h-xl lapxl:max-w-2xl lapxl:max-h-2xl desksm:max-w-3xl desksm:max-h-3xl desklg:max-w-6xl desklg:max-h-6xl"
              layout="responsive"
              height={500}
              width={500}
              src="/images/portfolioBlog.png"
              alt="Blog Website"
            />
            <div className="text-2xl mb-8">
              <Link
                href="https://react-typescript-blog-peach.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
              >
                Live Site
              </Link>
            </div>
            <div className="text-gray-500 text-2xl mb-4 celllg:max-w-sm tablet:max-w-md lapsm:max-w-lg desksm:max-w-2xl desklg:max-w-3xl">
              <ul>
                <li className="text-grey text-2xl">
                  - Used Firebase Auth to handle personal sign in to post blogs.
                </li>
                <li className="text-grey text-2xl">
                  - Utilized React and Typescript to design and build the layout
                  and funcitonality of the blog website.
                </li>
                <li className="text-grey text-2xl">
                  - Deployed Firebase&apos;s serverless backend to allow for
                  data, file, and image storage for the blog website.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap">
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                React
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Firebase
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Tailwind
              </p>
              <p className="text-amber-400 text-lg border-yellow-400 border-4 rounded-lg px-2 m-1">
                Vercel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
