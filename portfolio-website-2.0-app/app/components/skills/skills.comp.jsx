"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import {
  SiNextdotjs,
  SiSupabase,
  SiMongodb,
  SiMongoose,
  SiVercel,
} from "react-icons/si";
import { FaLinux, FaGithub, FaWindows } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

export default function Skills() {
  const loadRef = useRef(null); // Ref for the skills container
  const skillRefs = useRef([]);
  skillRefs.current = [];

  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the skills container opacity
            anime({
              targets: loadRef.current,
              opacity: [0, 1],
              duration: 1000,
              easing: "easeInOutExpo",
            });

            // Animation for each skill item
            skillRefs.current.forEach((skill, index) => {
              anime({
                targets: skill,
                translateY: [100, 0],
                rotate: "1turn",
                opacity: [0, 1],
                duration: 2500,
                easing: "easeInOutExpo",
                delay: index * 200,
              });
            });

            // Optional: Disconnect observer after animation
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (loadRef.current) {
      observer.observe(loadRef.current);
    }

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={loadRef}
      className="flex flex-col items-center mb-24"
      style={{ opacity: 0 }} // Initial opacity set to 0
    >
      <p ref={addToRefs} className="text-3xl text-white mb-8">
        Skills
      </p>
      <div className="grid grid-cols-3 tablet:grid-cols-5 grid-rows-5 tablet:grid-rows-3 gap-2 celllg:gap-4 mx-2 laplg:grid-rows-2 laplg:grid-cols-8 desksm:grid-cols-10 desklg:grid-cols-12">
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">HTML</p>
          <svg
            className="html"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
            ></path>
            <path
              fill="#EEE"
              d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">CSS</p>
          <svg
            className="css"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
            ></path>
            <path
              fill="#EEE"
              d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">JavaScript</p>
          <svg
            className="javascript"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">React</p>
          <svg
            className="react"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="7" fill="#39c1d7"></circle>
            <path
              fill="#1f212b"
              d="M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,44c-3.309,0-6,2.691-6,6	s2.691,6,6,6s6-2.691,6-6S53.309,44,50,44z"
            ></path>
            <path
              fill="#39c1d7"
              d="M88.5,50c0-5.376-6.474-10.029-16.518-12.798c2.582-10.096,1.787-18.035-2.827-20.729	c-1.82-1.063-4.028-1.257-6.562-0.579C58.775,16.916,54.4,19.904,50,24.293c-4.4-4.389-8.775-7.376-12.593-8.399	c-2.534-0.679-4.742-0.484-6.562,0.579c-4.614,2.694-5.409,10.632-2.827,20.729C17.974,39.971,11.5,44.624,11.5,50	s6.474,10.029,16.518,12.799c-2.582,10.096-1.787,18.035,2.827,20.729c1.112,0.649,2.368,0.976,3.756,0.975	c0.883,0,1.82-0.132,2.806-0.396c3.818-1.023,8.193-4.01,12.593-8.399c4.4,4.389,8.775,7.376,12.593,8.399	c0.986,0.264,1.923,0.396,2.806,0.396c1.388,0,2.644-0.325,3.756-0.975c4.614-2.694,5.408-10.633,2.827-20.729	C82.026,60.029,88.5,55.376,88.5,50z M63.369,18.791c0.725-0.193,1.397-0.291,2.016-0.291c0.86,0,1.616,0.188,2.257,0.563	c3.092,1.806,3.723,8.42,1.42,17.411c-3.173-0.714-6.635-1.251-10.314-1.583c-2.159-3.113-4.405-5.947-6.668-8.429	C56.098,22.435,60.04,19.683,63.369,18.791z M60.755,56.299c-1.179,2.066-2.42,4.045-3.693,5.939C54.802,62.407,52.446,62.5,50,62.5	s-4.802-0.093-7.061-0.262c-1.273-1.894-2.514-3.873-3.693-5.939c-1.219-2.136-2.313-4.24-3.293-6.298	c0.98-2.058,2.074-4.162,3.293-6.299c1.18-2.067,2.42-4.046,3.694-5.94C45.199,37.593,47.554,37.5,50,37.5s4.801,0.093,7.061,0.262	c1.273,1.894,2.514,3.874,3.694,5.94c1.219,2.136,2.313,4.24,3.293,6.299C63.068,52.059,61.974,54.163,60.755,56.299z M65.644,53.545c1.041,2.461,1.901,4.83,2.597,7.082c-2.275,0.507-4.731,0.93-7.354,1.243c0.842-1.326,1.672-2.682,2.473-4.085	C64.171,56.366,64.928,54.951,65.644,53.545z M50,71.357c-1.636-1.809-3.269-3.812-4.864-5.979C46.728,65.455,48.348,65.5,50,65.5	s3.272-0.045,4.864-0.122C53.269,67.544,51.636,69.547,50,71.357z M39.112,61.87c-2.622-0.313-5.079-0.736-7.354-1.243	c0.696-2.252,1.556-4.622,2.597-7.082c0.716,1.406,1.474,2.821,2.284,4.24C37.441,59.189,38.27,60.545,39.112,61.87z M34.356,46.456	c-1.041-2.461-1.902-4.831-2.597-7.084c2.275-0.507,4.732-0.93,7.355-1.243c-0.843,1.326-1.672,2.683-2.473,4.086	C35.829,43.635,35.072,45.05,34.356,46.456z M50,28.644c1.636,1.809,3.269,3.812,4.864,5.979C53.272,34.545,51.652,34.5,50,34.5	s-3.272,0.045-4.864,0.122C46.731,32.456,48.364,30.453,50,28.644z M63.36,42.216c-0.801-1.404-1.631-2.76-2.473-4.086	c2.623,0.313,5.079,0.736,7.355,1.243c-0.696,2.253-1.556,4.622-2.597,7.084C64.928,45.05,64.171,43.635,63.36,42.216z M32.358,19.063C33,18.688,33.754,18.5,34.615,18.5c0.618,0,1.292,0.098,2.016,0.291c3.329,0.892,7.271,3.643,11.289,7.67	c-2.263,2.482-4.509,5.317-6.668,8.429c-3.679,0.332-7.142,0.869-10.314,1.583C28.635,27.482,29.266,20.868,32.358,19.063z M14.5,50	c0-3.596,5.401-7.44,14.335-9.901c0.969,3.159,2.241,6.486,3.806,9.901c-1.565,3.415-2.837,6.742-3.806,9.901	C19.901,57.44,14.5,53.596,14.5,50z M36.631,81.209c-1.733,0.462-3.17,0.371-4.273-0.271c-3.092-1.806-3.722-8.42-1.42-17.411	c3.172,0.714,6.635,1.251,10.313,1.583c2.159,3.113,4.405,5.947,6.668,8.43C43.902,77.566,39.96,80.317,36.631,81.209z M67.642,80.938c-1.103,0.644-2.539,0.734-4.273,0.271c-3.329-0.892-7.271-3.643-11.289-7.67c2.263-2.482,4.509-5.317,6.668-8.43	c3.679-0.332,7.141-0.869,10.313-1.583C71.365,72.518,70.734,79.132,67.642,80.938z M71.165,59.901	c-0.969-3.159-2.241-6.486-3.806-9.901c1.565-3.415,2.837-6.743,3.806-9.901C80.099,42.56,85.5,46.404,85.5,50	S80.099,57.44,71.165,59.901z"
            ></path>
            <path
              fill="#1f212b"
              d="M34.595,85.002c-1.471,0-2.817-0.351-4.001-1.043c-4.632-2.705-5.783-10.276-3.178-20.811	C16.975,60.179,11,55.4,11,50s5.975-10.179,16.415-13.148c-2.604-10.535-1.453-18.106,3.179-20.811	c1.938-1.134,4.273-1.346,6.943-0.63c3.718,0.996,8.02,3.82,12.463,8.179c4.444-4.359,8.746-7.183,12.463-8.179	c2.669-0.714,5.005-0.502,6.944,0.63c4.631,2.705,5.782,10.276,3.178,20.811C83.025,39.821,89,44.6,89,50	s-5.975,10.179-16.415,13.148c2.604,10.535,1.454,18.105-3.178,20.811c-1.927,1.125-4.286,1.342-6.943,0.63	c-3.719-0.996-8.021-3.82-12.464-8.178c-4.443,4.358-8.745,7.183-12.463,8.178c-1.023,0.274-2.011,0.413-2.936,0.413	C34.599,85.002,34.597,85.002,34.595,85.002z M34.604,15.999c-1.301,0-2.474,0.302-3.507,0.906	c-4.224,2.467-5.194,10.008-2.595,20.173c0.067,0.264-0.089,0.534-0.352,0.606C18.038,40.472,12,45.077,12,50	s6.038,9.528,16.151,12.316c0.263,0.072,0.419,0.342,0.352,0.606c-2.6,10.165-1.63,17.707,2.594,20.173	c1.03,0.601,2.207,0.906,3.498,0.906c0.002,0,0.004,0,0.006,0c0.838,0,1.738-0.127,2.677-0.378c3.647-0.977,7.925-3.836,12.369-8.27	c0.195-0.194,0.511-0.194,0.706,0c4.444,4.433,8.722,7.292,12.369,8.27c2.394,0.639,4.485,0.461,6.181-0.528	c4.224-2.467,5.194-10.008,2.594-20.173c-0.067-0.264,0.089-0.534,0.352-0.606C81.962,59.528,88,54.923,88,50	s-6.038-9.528-16.151-12.316c-0.263-0.072-0.419-0.342-0.352-0.606c2.599-10.165,1.629-17.707-2.595-20.173	c-1.699-0.993-3.779-1.17-6.181-0.528c-3.647,0.977-7.924,3.836-12.369,8.27c-0.195,0.194-0.511,0.194-0.706,0	c-4.445-4.434-8.722-7.293-12.369-8.27C36.336,16.125,35.444,15.999,34.604,15.999z M65.386,81.999	c-0.663,0-1.379-0.102-2.146-0.307c-3.331-0.893-7.312-3.589-11.514-7.8c-0.188-0.189-0.195-0.493-0.016-0.69	c2.265-2.484,4.494-5.303,6.627-8.378c0.084-0.122,0.218-0.2,0.366-0.213c3.612-0.326,7.06-0.855,10.249-1.573	c0.261-0.059,0.527,0.101,0.594,0.364c2.336,9.123,1.703,16.008-1.652,17.967l0,0C67.175,81.789,66.336,81.999,65.386,81.999z M52.771,73.521c3.951,3.894,7.653,6.381,10.727,7.205c1.599,0.427,2.909,0.353,3.892-0.22l0,0	c2.855-1.668,3.357-8.073,1.306-16.387c-3.028,0.659-6.277,1.152-9.67,1.467C57.01,68.478,54.908,71.144,52.771,73.521z M34.614,81.999c-0.95,0-1.789-0.21-2.508-0.629c-3.355-1.96-3.989-8.845-1.652-17.968c0.067-0.262,0.333-0.419,0.594-0.364	c3.188,0.718,6.636,1.247,10.249,1.573c0.147,0.013,0.282,0.091,0.366,0.213c2.133,3.075,4.362,5.894,6.627,8.378	c0.18,0.197,0.173,0.501-0.016,0.69c-4.202,4.21-8.183,6.907-11.513,7.8h0C35.993,81.896,35.276,81.999,34.614,81.999z M31.304,64.119c-2.051,8.313-1.549,14.719,1.306,16.387c0.982,0.572,2.292,0.647,3.892,0.22l0,0	c3.074-0.824,6.776-3.312,10.727-7.205c-2.136-2.377-4.238-5.043-6.254-7.935C37.582,65.271,34.332,64.778,31.304,64.119z M50,71.856c-0.141,0-0.276-0.06-0.371-0.165c-1.663-1.839-3.31-3.864-4.896-6.018c-0.114-0.155-0.129-0.363-0.038-0.533	c0.091-0.17,0.261-0.274,0.465-0.263c3.306,0.161,6.374,0.161,9.68,0c0.2-0.012,0.374,0.093,0.465,0.263	c0.091,0.17,0.077,0.377-0.038,0.533c-1.586,2.153-3.233,4.178-4.896,6.018C50.276,71.796,50.141,71.856,50,71.856z M46.167,65.924	c1.251,1.655,2.537,3.226,3.833,4.684c1.297-1.458,2.582-3.028,3.833-4.684C51.221,66.024,48.779,66.024,46.167,65.924z M50,63	c-2.369,0-4.757-0.088-7.099-0.263c-0.153-0.011-0.292-0.092-0.378-0.22c-1.337-1.989-2.586-3.998-3.712-5.97	c-1.18-2.068-2.294-4.198-3.31-6.332c-0.065-0.136-0.065-0.294,0-0.43c1.016-2.134,2.13-4.264,3.31-6.332	c1.125-1.97,2.374-3.979,3.713-5.971c0.085-0.127,0.225-0.208,0.378-0.22c4.684-0.35,9.513-0.35,14.196,0	c0.153,0.011,0.292,0.092,0.378,0.22c1.339,1.992,2.588,4.001,3.713,5.971c1.18,2.068,2.294,4.198,3.31,6.332	c0.065,0.136,0.065,0.294,0,0.43c-1.016,2.134-2.13,4.264-3.31,6.332l0,0c-1.126,1.972-2.375,3.981-3.712,5.97	c-0.085,0.127-0.225,0.208-0.378,0.22C54.757,62.912,52.369,63,50,63z M43.218,61.757c4.479,0.322,9.085,0.322,13.563,0	c1.273-1.903,2.463-3.822,3.539-5.707c1.128-1.977,2.195-4.011,3.173-6.05c-0.978-2.039-2.045-4.074-3.173-6.05	c-1.075-1.883-2.265-3.802-3.54-5.708c-4.479-0.322-9.084-0.322-13.563,0c-1.274,1.906-2.465,3.825-3.54,5.708	c-1.128,1.977-2.195,4.011-3.173,6.05c0.978,2.039,2.045,4.074,3.173,6.05C40.755,57.936,41.945,59.854,43.218,61.757z M60.888,62.371c-0.17,0-0.331-0.087-0.423-0.233c-0.103-0.164-0.102-0.372,0.001-0.535c0.928-1.461,1.733-2.791,2.46-4.065	c0.764-1.338,1.528-2.758,2.273-4.219c0.088-0.173,0.273-0.276,0.463-0.272c0.194,0.007,0.367,0.125,0.443,0.305	c1.015,2.399,1.894,4.798,2.614,7.129c0.042,0.133,0.025,0.278-0.045,0.398c-0.07,0.121-0.188,0.207-0.324,0.237	c-2.35,0.525-4.841,0.946-7.403,1.252C60.927,62.37,60.907,62.371,60.888,62.371z M65.596,54.731	c-0.594,1.138-1.198,2.245-1.801,3.302c-0.583,1.022-1.216,2.079-1.92,3.209c1.97-0.262,3.89-0.593,5.727-0.987	C67.025,58.441,66.353,56.59,65.596,54.731z M39.112,62.371c-0.02,0-0.04-0.001-0.06-0.003C36.491,62.061,34,61.64,31.65,61.115	c-0.136-0.03-0.253-0.116-0.324-0.237c-0.07-0.121-0.086-0.265-0.045-0.398c0.72-2.332,1.599-4.73,2.614-7.129	c0.076-0.179,0.249-0.298,0.443-0.305c0.182-0.019,0.375,0.099,0.463,0.272c0.745,1.461,1.509,2.881,2.273,4.219	c0.728,1.274,1.533,2.604,2.46,4.065c0.104,0.163,0.104,0.371,0.001,0.535C39.443,62.284,39.283,62.371,39.112,62.371z M32.399,60.255c1.837,0.394,3.757,0.725,5.727,0.987c-0.705-1.13-1.337-2.187-1.92-3.209c-0.604-1.057-1.207-2.165-1.801-3.302	C33.647,56.59,32.975,58.441,32.399,60.255z M71.165,60.401c-0.215,0-0.412-0.139-0.478-0.354c-0.975-3.179-2.248-6.489-3.782-9.838	c-0.061-0.132-0.061-0.285,0-0.417c1.534-3.349,2.807-6.66,3.783-9.84c0.08-0.259,0.354-0.404,0.611-0.335	C80.367,42.116,86,46.094,86,50s-5.634,7.884-14.703,10.383C71.253,60.395,71.208,60.401,71.165,60.401z M67.909,50	c1.436,3.155,2.643,6.277,3.589,9.288C79.717,56.945,85,53.322,85,50s-5.283-6.945-13.502-9.288	C70.551,43.724,69.344,46.846,67.909,50z M28.835,60.401c-0.044,0-0.088-0.006-0.133-0.018C19.634,57.884,14,53.906,14,50	s5.633-7.884,14.702-10.383c0.258-0.069,0.531,0.076,0.611,0.335c0.976,3.18,2.249,6.491,3.783,9.84	c0.061,0.132,0.061,0.284,0,0.417c-1.535,3.35-2.807,6.66-3.782,9.838C29.248,60.262,29.05,60.401,28.835,60.401z M28.502,40.712	C20.283,43.055,15,46.678,15,50s5.283,6.945,13.502,9.288c0.947-3.011,2.153-6.132,3.589-9.288	C30.656,46.846,29.449,43.724,28.502,40.712z M65.645,46.957c-0.188,0-0.36-0.105-0.446-0.273c-0.757-1.488-1.501-2.869-2.272-4.22	l0,0c-0.726-1.272-1.531-2.602-2.461-4.066c-0.104-0.163-0.104-0.371-0.001-0.535c0.103-0.163,0.287-0.253,0.483-0.23	c2.563,0.307,5.054,0.728,7.404,1.252c0.136,0.03,0.253,0.116,0.324,0.237c0.07,0.121,0.086,0.265,0.045,0.398	c-0.721,2.336-1.601,4.735-2.614,7.131c-0.076,0.179-0.249,0.298-0.443,0.305C65.656,46.957,65.65,46.957,65.645,46.957z M63.794,41.968c0.611,1.07,1.205,2.158,1.801,3.302c0.756-1.856,1.428-3.709,2.005-5.525c-1.837-0.394-3.757-0.725-5.728-0.987	C62.58,39.89,63.212,40.947,63.794,41.968L63.794,41.968z M34.355,46.957c-0.006,0-0.012,0-0.018,0	c-0.194-0.007-0.367-0.125-0.443-0.305c-1.013-2.396-1.893-4.795-2.614-7.131c-0.042-0.133-0.025-0.278,0.045-0.398	c0.07-0.121,0.188-0.207,0.324-0.237c2.35-0.525,4.841-0.946,7.404-1.252c0.195-0.02,0.38,0.067,0.483,0.23	c0.103,0.164,0.102,0.372-0.001,0.535c-0.93,1.464-1.735,2.794-2.461,4.066c-0.771,1.351-1.515,2.731-2.272,4.22	C34.715,46.852,34.543,46.957,34.355,46.957z M32.399,39.745c0.577,1.816,1.25,3.669,2.005,5.525	c0.597-1.144,1.19-2.232,1.801-3.302c0.583-1.021,1.215-2.078,1.921-3.21C36.156,39.02,34.236,39.351,32.399,39.745z M69.063,36.974	c-0.037,0-0.073-0.004-0.11-0.012c-3.188-0.718-6.637-1.247-10.25-1.573c-0.147-0.013-0.282-0.091-0.366-0.213	c-2.133-3.076-4.363-5.894-6.627-8.377c-0.18-0.197-0.173-0.501,0.016-0.69c4.201-4.21,8.183-6.908,11.514-7.8h0	c1.869-0.5,3.438-0.387,4.654,0.322c3.355,1.96,3.989,8.845,1.653,17.968C69.489,36.823,69.287,36.974,69.063,36.974z M59.025,34.414c3.393,0.315,6.643,0.808,9.671,1.467c2.051-8.313,1.549-14.719-1.307-16.387c-0.979-0.571-2.291-0.646-3.891-0.22	c-3.074,0.824-6.777,3.312-10.728,7.206C54.907,28.855,57.009,31.521,59.025,34.414z M30.937,36.974	c-0.224,0-0.426-0.151-0.484-0.376c-2.336-9.123-1.703-16.007,1.652-17.967c0,0,0,0,0.001,0c1.216-0.709,2.787-0.822,4.653-0.322	c3.332,0.893,7.313,3.59,11.514,7.8c0.188,0.189,0.195,0.493,0.016,0.69c-2.264,2.483-4.494,5.302-6.627,8.377	c-0.084,0.122-0.218,0.2-0.366,0.213c-3.612,0.326-7.061,0.855-10.25,1.573C31.01,36.97,30.974,36.974,30.937,36.974z M32.61,19.494	c-2.855,1.668-3.357,8.074-1.307,16.387c3.028-0.659,6.278-1.152,9.671-1.467c2.017-2.893,4.118-5.559,6.254-7.935	c-3.951-3.894-7.653-6.382-10.728-7.206C34.907,18.848,33.593,18.922,32.61,19.494L32.61,19.494z M54.864,35.122	c-0.008,0-0.016,0-0.024,0c-3.306-0.161-6.373-0.161-9.679,0c-0.206,0.005-0.374-0.094-0.465-0.263	c-0.091-0.17-0.077-0.377,0.038-0.533c1.587-2.155,3.234-4.18,4.896-6.018c0.19-0.209,0.552-0.209,0.742,0	c1.661,1.837,3.308,3.862,4.896,6.018c0.114,0.155,0.129,0.363,0.038,0.533C55.217,35.021,55.047,35.122,54.864,35.122z M50,34	c1.242,0,2.527,0.026,3.833,0.077c-1.252-1.657-2.538-3.228-3.833-4.684c-1.295,1.457-2.581,3.027-3.833,4.684	C47.473,34.026,48.758,34,50,34z"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Python</p>
          <svg
            className="python"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0277BD"
              d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
            ></path>
            <path
              fill="#FFC107"
              d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">TypeScript</p>
          <svg
            className="typescript"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
            <polygon
              fill="#fff"
              points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
            ></polygon>
            <path
              fill="#fff"
              d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Next Js</p>
          <SiNextdotjs className="next text-white text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Vercel</p>
          <SiVercel className="text-white text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Firebase</p>
          <svg
            className="firebase"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ff8f00"
              d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
            ></path>
            <path
              fill="#ffa000"
              d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
            ></path>
            <path
              fill="#ff6f00"
              d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
            ></path>
            <path
              className="firebase"
              fill="#ffc400"
              d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Supabase</p>
          <SiSupabase className="text-teal-400 text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">MongoDB</p>
          <SiMongodb className="text-green-400 text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Mongoose</p>
          <SiMongoose className="text-red-500 text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">MySQL</p>
          <GrMysql className="text-blue-600 text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">PostgresSQL</p>
          <BiLogoPostgresql className="text-blue-500 text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Tailwind</p>
          <svg
            className="tailwindcss"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <path
              fill="#31c4f3"
              d="M30.64,36.275c7.042-8.542,10.948-13.279,17.99-13.279c12.764,0,16.07,9.906,24.867,16.413 C77,42,86.98,44.818,90.501,36.275C86.98,48.021,79.938,53.36,72.895,53.36C67.722,53.36,61,48,54.849,41.08 C47.267,32.552,34.162,32.004,30.64,36.275z"
            ></path>
            <path
              fill="#31c4f3"
              d="M9.499,59.919c7.042-8.542,10.948-13.279,17.99-13.279c12.764,0,16.359,9.532,24.867,16.413 C56,66,65.838,68.461,69.36,59.919c-3.521,11.746-10.564,17.084-17.606,17.084C46.581,77.004,40,72,33.707,64.724 C26.243,56.093,13.02,55.648,9.499,59.919z"
            ></path>
            <path
              fill="#1f212b"
              d="M72.895,54.359c-6.265,0-13.678-6.86-18.794-12.615c-4.756-5.35-11.458-7.193-16.122-7.077 c-2.998,0.056-5.452,0.894-6.565,2.242c0,0,0,0-0.001,0.001c-0.352,0.427-0.982,0.487-1.408,0.136 c-0.426-0.351-0.488-0.98-0.136-1.406c0.001-0.003,0.003-0.005,0.005-0.007c7.011-8.504,11.245-13.637,18.757-13.637 c9.158,0,13.657,4.833,18.42,9.951c2.129,2.287,4.331,4.652,7.042,6.658c2.023,1.495,6.572,3.132,10.357,2.076 c2.364-0.657,4.089-2.269,5.127-4.787c0.203-0.492,0.759-0.738,1.259-0.562c0.502,0.179,0.776,0.719,0.624,1.229 C88.118,47.706,81.178,54.359,72.895,54.359z M38.293,32.664c5.1,0,12.213,2.026,17.303,7.752 c6.846,7.702,12.99,11.943,17.299,11.943c5.891,0,11.058-3.931,14.46-10.767c-0.726,0.438-1.517,0.779-2.369,1.016 c-4.685,1.304-9.897-0.778-12.083-2.396c-2.86-2.115-5.125-4.55-7.316-6.903c-4.651-4.998-8.668-9.313-16.956-9.313 c-5.472,0-9.01,3.182-14.004,9.055c1.014-0.23,2.128-0.361,3.315-0.383C38.058,32.665,38.175,32.664,38.293,32.664z"
            ></path>
            <path
              fill="#1f212b"
              d="M51.753,78.004c-5.083,0-11.761-4.483-18.803-12.625c-4.598-5.317-11.242-7.159-15.893-7.098 c-3.105,0.036-5.642,0.886-6.787,2.272c0,0-0.001,0.001-0.001,0.001l0,0c-0.352,0.428-0.98,0.487-1.408,0.136 c-0.426-0.352-0.487-0.981-0.135-1.407l0,0c0.001-0.002,0.003-0.004,0.004-0.006c7.011-8.504,11.245-13.637,18.757-13.637 c9.493,0,14.151,5.034,19.084,10.363c1.964,2.123,3.996,4.317,6.412,6.271c2.183,1.766,6.437,3.152,10.016,2.235 c2.51-0.641,4.338-2.313,5.435-4.973c0.204-0.493,0.759-0.74,1.259-0.562c0.502,0.179,0.776,0.719,0.624,1.229 C66.977,71.351,60.037,78.004,51.753,78.004z M17.257,56.279c5.104,0,12.233,2.04,17.207,7.791 c6.656,7.695,12.797,11.934,17.29,11.934c5.864,0,11.011-3.895,14.414-10.675c-0.812,0.497-1.705,0.873-2.671,1.119 c-4.258,1.089-9.144-0.494-11.769-2.618c-2.528-2.044-4.609-4.293-6.622-6.468c-4.828-5.217-8.998-9.722-17.616-9.722 c-5.467,0-9.004,3.176-13.991,9.038c1.076-0.247,2.266-0.383,3.537-0.397C17.108,56.28,17.183,56.279,17.257,56.279z"
            ></path>
            <path d="M59.424,69.567c-4.122,0-8.357-2.487-10.382-4.126c-2.181-1.764-4.185-3.977-6.124-6.116C38.575,54.529,34.473,50,28.5,50 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c6.416,0,10.861,4.907,15.159,9.653c1.913,2.112,3.891,4.296,6.011,6.011 c2.148,1.737,6.905,4.494,11.123,3.794c0.271-0.049,0.529,0.14,0.575,0.411c0.045,0.272-0.139,0.53-0.412,0.575 C60.451,69.528,59.938,69.567,59.424,69.567z"></path>
            <path d="M19.5,53c-0.162,0-0.32-0.078-0.417-0.223c-0.153-0.229-0.091-0.54,0.139-0.693c2.513-1.676,4.26-2.59,6.836-2.935 c0.273-0.045,0.525,0.155,0.562,0.429s-0.155,0.525-0.429,0.562c-2.381,0.319-4.028,1.186-6.414,2.776 C19.692,52.973,19.596,53,19.5,53z"></path>
            <path d="M80.924,46.067c-4.122,0-8.357-2.487-10.382-4.126c-2.181-1.764-4.185-3.977-6.124-6.116 C60.075,31.029,55.973,26.5,50,26.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c6.416,0,10.861,4.907,15.159,9.653 c1.913,2.112,3.891,4.296,6.011,6.011c2.148,1.737,6.907,4.487,11.123,3.794c0.273-0.053,0.53,0.14,0.575,0.411 c0.045,0.272-0.139,0.53-0.412,0.575C81.951,46.028,81.438,46.067,80.924,46.067z"></path>
            <path d="M41,29.5c-0.162,0-0.32-0.078-0.417-0.223c-0.153-0.229-0.091-0.54,0.139-0.693c2.24-1.493,3.869-2.383,6.057-2.809 c0.273-0.046,0.534,0.125,0.586,0.396c0.053,0.271-0.125,0.534-0.396,0.587c-2.022,0.393-3.561,1.237-5.693,2.658 C41.192,29.473,41.096,29.5,41,29.5z"></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Bootstrap</p>
          <svg
            className="bootstrap"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1"
              x1="24"
              x2="24"
              y1="41"
              y2="7"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#643499"></stop>
              <stop offset=".011" stopColor="#68369f"></stop>
              <stop offset=".135" stopColor="#773db6"></stop>
              <stop offset=".193" stopColor="#8042c3"></stop>
              <stop offset=".248" stopColor="#8343c8"></stop>
              <stop offset=".388" stopColor="#8444c9"></stop>
              <stop offset=".732" stopColor="#9751d2"></stop>
              <stop offset=".997" stopColor="#9c55d4"></stop>
              <stop offset=".998" stopColor="#9c55d4"></stop>
              <stop offset="1" stopColor="#9c55d4"></stop>
            </linearGradient>
            <path
              fill="url(#Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1)"
              d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.681,2.207,1.801,3.652,3.593,3.981c0.206,0.038,0.363,0.205,0.363,0.415v1.438	c0,0.21-0.157,0.377-0.363,0.415c-1.792,0.328-2.912,1.773-3.593,3.981c-0.724,2.345-0.824,5.222-0.747,7.443	C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c0.077-2.221-0.023-5.097-0.747-7.443	c-0.681-2.207-1.804-3.652-3.596-3.981c-0.206-0.038-0.363-0.205-0.363-0.415v-1.438c0-0.21,0.157-0.377,0.363-0.415	c1.792-0.328,2.915-1.773,3.596-3.981C7.35,16.54,7.451,13.664,7.373,11.443z"
            ></path>
            <path
              fill="#fff"
              d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Node Js</p>
          <svg
            className="nodejs"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#21a366"
              d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
            ></path>
            <path
              fill="#21a366"
              d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
            ></path>
          </svg>
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">GitHub</p>
          <FaGithub className="text-white text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Linux</p>
          <FaLinux className="text-white text-8xl" />
        </div>
        <div ref={addToRefs} className="flex flex-col items-center">
          <p className="text-white text-2xl">Windows</p>
          <FaWindows className="text-sky-400 text-8xl" />
        </div>
      </div>
    </div>
  );
}
