"use client";
import Link from "next/link";
import Header from "../Header/Header";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "MERN Stack Developer",
        "Front-End Developer",
        "React Developer",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 500,
      startDelay: 300,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero_wrap md:h-screen" id="home">
      <Header />

      <div className="hero_content pt-10 md:pt-0 text-base-100">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative z-40">
              <h2 className="sm:text-2xl">Hello, my name is</h2>
              <h2 className="text-3xl md:text-5xl lg:text-[55px] sm:my-3">
                Nuaim Hasan Nasim
              </h2>
              <h2 className="sm:text-xl">
                And i am{" "}
                <span ref={el} className="text-gradient">
                  MERN Stack Developer
                </span>
              </h2>
              <p className="mt-3 text-gray-300 w-4/5">
                I have 1 year of experience as Front-End Developer at Pidex
                Limited, and 1.5 year of experience as Web Designer at
                regisroumila (USA-Remote).
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href="https://github.com/nasim0994"
                  target="_blank"
                  className="text-[25px] hover:text-primary duration-300"
                >
                  <PiLinkedinLogoBold />
                </Link>
                <Link
                  href="https://github.com/nasim0994"
                  target="_blank"
                  className="text-[25px] hover:text-primary duration-300"
                >
                  <FiGithub />
                </Link>
              </div>
            </div>

            <div>
              <div className="about_img w-[90%] sm:w-1/2 md:w-full lg:w-[26rem] h-72 md:h-[23rem] lg:h-[26rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fbfdff"
                fillOpacity="1"
                d="M0,160L80,181.3C160,203,320,245,480,266.7C640,288,800,288,960,266.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </svg>
        </svg>
      </div>
    </section>
  );
}
