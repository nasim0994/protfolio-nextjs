"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "../Header/Header";

export default function Hero() {
  return (
    <section className="hero_wrap h-[90vh] lg:h-screen">
      <Header />

      <div className="hero_content ">
        <div className="container">
          <div className="sm:flex gap-10 items-center">
            <div className="relative z-40 md:1/2 lg:w-[40%]">
              <h2 className="sm:text-2xl">Hello, my name is</h2>
              <h2 className="text-3xl md:text-5xl lg:text-6xl sm:my-3">
                Nasim Uddin
              </h2>
              <h2 className="sm:text-xl">And i am MERN Stack Developer</h2>

              <div className="mt-5 sm:mt-8">
                <Link
                  href=""
                  className="bg-primary-g px-5 py-2.5 text-sm sm:text-base"
                >
                  View Resume
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 lg:w-[60%] mt-10 sm:mt-0">
              <Image
                src="/images/hero/hero.png"
                alt=""
                className="w-full mx-auto"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
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
