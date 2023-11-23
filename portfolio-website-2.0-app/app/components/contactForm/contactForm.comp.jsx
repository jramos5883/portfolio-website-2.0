"use client";

import emailjs from "emailjs-com";
import { useEffect } from "react";

export default function ContactForm() {
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
    <div className="flex flex-col justify-center items-center m-8">
      <p className="text-amber-400 text-3xl pb-4">
        03. <span className="text-white">Contact Form</span>
      </p>

      <p className="text-white text-4xl font-bold ">Get In Touch!</p>
      <p className="text-gray-500 text-2xl indent max-w-2xl">
        I am currently looking to make my break into tech and find my place in
        the industry. I am also working on expanding my network and meeting more
        like minded people. If you have any questions or would just like to say
        hi, feel free to send me a message!
      </p>
      <form className="w-full max-w-2xl" onSubmit={sendEmail}>
        <div className="flex flex-col">
          <div className="">
            <label className="text-amber-400 text-2xl">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded"
              placeholder="Full Name / Business Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-amber-400 text-2xl">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-amber-400 text-2xl">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              className="w-full border rounded"
              placeholder="Phone Number (optional)"
            />
          </div>
          <div className="mb-4">
            <label className="text-amber-400 text-2xl">Message:</label>
            <textarea
              placeholder="Your Message"
              className="w-full border rounded"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-amber-400 border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
