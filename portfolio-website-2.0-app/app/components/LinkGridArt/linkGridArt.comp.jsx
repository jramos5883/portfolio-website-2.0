"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

export default function LinkGridArt() {
  const rows = 24;
  const cols = 18;

  // Example color data, replace with your actual pixel art color data
  const linkColors = [
    [
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "black",
      "black",
      "black",
      "black",
      "black",
      "black",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "white",
      "white",
      "black",
      "black",
      "green",
      "green",
      "green",
      "green",
      "black",
      "black",
      "white",
      "white",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "white",
      "black",
      "black",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "black",
      "black",
      "white",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "black",
      "black",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "black",
      "black",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "black",
      "green",
      "black",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "black",
      "green",
      "black",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "black",
      "black",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "black",
      "black",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "black",
      "black",
      "yellow",
      "yellow",
      "black",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "black",
      "yellow",
      "yellow",
      "black",
      "black",
      "white",
      "white",
    ],
    [
      "black",
      "black",
      "black",
      "black",
      "yellow",
      "black",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "black",
      "black",
      "black",
      "yellow",
      "black",
      "black",
      "black",
      "black",
    ],
    [
      "black",
      "tan",
      "tan",
      "black",
      "black",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "black",
      "black",
      "tan",
      "black",
      "yellow",
      "black",
      "tan",
      "tan",
      "black",
    ],
    [
      "white",
      "black",
      "black",
      "black",
      "black",
      "yellow",
      "yellow",
      "black",
      "black",
      "black",
      "tan",
      "tan",
      "black",
      "yellow",
      "black",
      "black",
      "black",
      "white",
    ],
    [
      "white",
      "white",
      "black",
      "yellow",
      "black",
      "black",
      "black",
      "black",
      "black",
      "tan",
      "black",
      "black",
      "black",
      "black",
      "yellow",
      "black",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "black",
      "yellow",
      "black",
      "white",
      "blue",
      "black",
      "tan",
      "tan",
      "black",
      "blue",
      "white",
      "black",
      "yellow",
      "black",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "black",
      "black",
      "black",
      "tan",
      "blue",
      "white",
      "tan",
      "tan",
      "white",
      "blue",
      "tan",
      "black",
      "black",
      "black",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "black",
      "black",
      "black",
      "tan",
      "tan",
      "tan",
      "tan",
      "tan",
      "tan",
      "black",
      "black",
      "black",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "white",
      "black",
      "black",
      "black",
      "black",
      "black",
      "black",
      "black",
      "black",
      "black",
      "black",
      "white",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "black",
      "green",
      "black",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "black",
      "green",
      "black",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "black",
      "green",
      "green",
      "black",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "black",
      "green",
      "green",
      "black",
      "white",
      "white",
    ],
    [
      "white",
      "black",
      "tan",
      "tan",
      "black",
      "black",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "black",
      "black",
      "tan",
      "tan",
      "black",
      "white",
    ],
    [
      "white",
      "black",
      "black",
      "tan",
      "black",
      "green",
      "black",
      "black",
      "yellow",
      "yellow",
      "black",
      "black",
      "green",
      "black",
      "tan",
      "black",
      "black",
      "white",
    ],
    [
      "white",
      "white",
      "black",
      "black",
      "black",
      "green",
      "green",
      "black",
      "yellow",
      "yellow",
      "black",
      "green",
      "green",
      "black",
      "black",
      "black",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "white",
      "black",
      "black",
      "black",
      "green",
      "green",
      "green",
      "green",
      "black",
      "black",
      "black",
      "white",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "black",
      "#654321",
      "#654321",
      "#654321",
      "black",
      "black",
      "black",
      "black",
      "#654321",
      "#654321",
      "#654321",
      "black",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "black",
      "#654321",
      "#654321",
      "black",
      "black",
      "white",
      "white",
      "black",
      "black",
      "#654321",
      "#654321",
      "black",
      "white",
      "white",
      "white",
    ],
    [
      "white",
      "white",
      "white",
      "white",
      "black",
      "black",
      "black",
      "white",
      "white",
      "white",
      "white",
      "black",
      "black",
      "black",
      "white",
      "white",
      "white",
      "white",
    ],
  ];
  const introLinkRef = useRef(null); // Correctly set ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: introLinkRef.current,
              opacity: [0, 1],
              duration: 5000, // Increased duration for visibility
              easing: "easeInOutExpo",
            });

            anime({
              targets: introLinkRef.current.querySelectorAll(".link-pixel"),
              translateX: anime.stagger(10, {
                grid: [cols, rows],
                from: "center",
                axis: "x",
              }),
              translateY: anime.stagger(10, {
                grid: [cols, rows],
                from: "center",
                axis: "y",
              }),
              rotateZ: anime.stagger([720, 720], {
                grid: [cols, rows],
                from: "center",
                axis: "x",
              }),
              delay: anime.stagger(250, {
                grid: [cols, rows],
                from: "center",
                start: 1500,
              }),
              easing: "easeInOutQuad",
              direction: "alternate",
              loop: true,
              endDelay: 1500, // Delay at the end of each loop iteration
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(introLinkRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-28 tablet:mb-36 tablet:mt-40 laplg:ml-32 lapxl:ml-24 desksm:ml-32 desksm:mb-12 desklg:pl-40">
      <div
        ref={introLinkRef}
        className="flex flex-col justify-center items-center"
        style={{ opacity: 0 }}
      >
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-row">
            {Array.from({ length: cols }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="link-pixel w-2 h-2 tablet:w-4 tablet:h-4 desksm:w-6 desksm:h-6 desklg:w-8 desklg:h-8"
                style={{
                  backgroundColor: linkColors[rowIndex][colIndex],
                  border: "1px solid black",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
