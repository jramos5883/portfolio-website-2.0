export default function ContactForm() {
  return (
    <div className="flex flex-col justify-center items-center m-8">
      <p className="text-amber-400 text-3xl pb-4">
        03. <span className="text-white">Contact Form</span>
      </p>

      <p className="text-white text-4xl font-bold ">Get In Touch!</p>
      <p className="text-gray-500 text-2xl  indent max-w-2xl">
        I am currently looking to make my break into tech and find my place in
        the industry. I am also working on expanding my network and meeting more
        like minded people. If you have any questions or would just like to say
        hi, feel free to send me a message!
      </p>
      <form
        target="_blank"
        action="https://formsubmit.co/45e1dbe943177426372966c2f8438520"
        method="POST"
        className="w-full max-w-2xl" // Set maximum width to limit the form width
      >
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Disable reCaptcha */}
        {/* <input type="hidden" name="_captcha" value="false" /> */}

        {/* Form Template: Table */}
        <input type="hidden" name="_template" value="table" />

        <div className="flex flex-col">
          <div className="">
            <label className="text-amber-400 text-2xl">Name:</label>
            <input
              type="text"
              name="Name&nbsp;/&nbsp;Alias"
              className="w-full border rounded"
              placeholder="Full Name / Buisness Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-amber-400 text-2xl">Email:</label>
            <input
              type="email"
              name="Email"
              className="w-full border rounded"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-amber-400 text-2xl">Phone Number:</label>
            <input
              type="tel"
              name="Phone&nbsp;Number"
              className="w-full border rounded"
              placeholder="Phone Number (optional)"
            />
          </div>
          <div className="mb-4">
            <label className="text-amber-400 text-2xl">Message:</label>
            <textarea
              placeholder="Your Message"
              className="w-full border rounded "
              name="Message"
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
