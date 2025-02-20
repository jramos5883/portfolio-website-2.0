"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import emailjs from "emailjs-com";

export default function ContactForm() {
  const introRef = useRef(null);
  const firstPRef = useRef(null);
  const secondPRef = useRef(null);
  const thirdPRef = useRef(null);
  const fourthPRef = useRef(null);
  const fifthPRef = useRef(null);
  const sixthPRef = useRef(null);
  const seventhPRef = useRef(null);

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
              translateX: [300, 0], // Adjust as needed
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 200, // No delay for the first element
            });

            // Second Paragraph Animation
            anime({
              targets: secondPRef.current,
              translateX: [-300, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 400, // Delay (e.g., 300ms after the first element)
            });

            // Third Paragraph Animation
            anime({
              targets: thirdPRef.current,
              translateX: [300, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 600, // Increase delay for each subsequent element
            });

            // Fourth Paragraph Animation
            anime({
              targets: fourthPRef.current,
              translateX: [-300, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 800,
            });

            // Fifth Paragraph Animation
            anime({
              targets: fifthPRef.current,
              translateX: [300, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 1000,
            });

            // Sixth Paragraph Animation
            anime({
              targets: sixthPRef.current,
              translateX: [-300, 0],
              opacity: [0, 1],
              duration: 2500,
              easing: "easeInOutExpo",
              delay: 1000,
            });

            // Seventh Paragraph Animation
            anime({
              targets: seventhPRef.current,
              translateX: [300, 0],
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

  useEffect(() => {
    emailjs.init("c_ZhbIiuPsaACfH3u");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs.sendForm("service_ib3ekjp", "template_u3il81m", e.target).then(
      (result) => {
        console.log(result.text);
        form.reset();
        alert("Message sent successfully! Talk to you soon! d[^_^]b");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again.");
      }
    );
  };

  return (
    <div
      ref={introRef}
      style={{ opacity: 0 }}
      id="id_contact"
      // hidden class added until I can fix contact form
      className="hidden flex flex-col justify-center items-center m-8"
    >
      <div ref={firstPRef}>
        <p className="text-amber-400 text-3xl">
          03. <span className="text-white">Contact Form</span>
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center"
        ref={secondPRef}
      >
        <p className="text-white text-4xl celllg:text-5xl tablet:text-6xl font-bold mt-8 mb-4 tablet:mt-12 tablet:mb-18">
          Get In Touch!
        </p>
        <p className="text-gray-500 text-2xl indent max-w-3xl indent-8 mb-4">
          I am currently looking to make my break into tech and find my place in
          the industry. I am also working on expanding my network and meeting
          more like minded people. If you have any questions or would just like
          to say hi and chat, feel free to send me a message!
        </p>
      </div>
      <form className="w-full max-w-3xl" onSubmit={sendEmail}>
        <div className="flex flex-col">
          <div ref={thirdPRef} className="mb-4">
            <label className="text-amber-400 text-2xl">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded border-yellow-400 border-4 p-2"
              placeholder="Full Name / Business Name"
              required
            />
          </div>
          <div ref={fourthPRef} className="mb-4">
            <label className="text-amber-400 text-2xl">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded border-yellow-400 border-4 p-2"
              placeholder="Email Address"
              required
            />
          </div>
          <div ref={fifthPRef} className="mb-4">
            <label className="text-amber-400 text-2xl">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              className="w-full border rounded border-yellow-400 border-4 p-2"
              placeholder="Phone Number (optional)"
            />
          </div>
          <div ref={sixthPRef} className="">
            <div className="mb-4">
              <label className="text-amber-400 text-2xl ">Message:</label>
              <textarea
                placeholder="Your Message"
                className="w-full border rounded border-yellow-400 border-4 p-2"
                name="message"
                rows="12"
                required
              ></textarea>
            </div>
          </div>
          <div ref={seventhPRef} className="">
            <button
              type="submit"
              className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700 w-full"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
