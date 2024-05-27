import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiEthereum, SiSolidity, SiWeb3Dotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Competitive Programmer.",
      "Full Stack Developer.",
      "Blockchain Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Aditya Pathak</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a frontend and blockchain developer with expertise in HTML, CSS,
          JavaScript, and frameworks like React. I also have extensive
          experience in blockchain technology, including smart contracts and
          dApps, particularly using Ethereum and Solidity.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://instagram.com/_adityapathakk" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://github.com/pathakadi" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/aditya-pathak-330703292/" target="_blank" rel="noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiWeb3Dotjs />
            </span>
            <span className="bannerIcon">
              <SiEthereum />
            </span>
            <span className="bannerIcon">
              <SiSolidity />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
