import Link from "next/link";

export default function About() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="about_img w-full h-96 sm:w-[28rem] sm:h-[28rem] "></div>
          </div>
          <div className="text-center sm:w-[600px] mx-auto lg:text-left lg:w-full">
            <h2 className="text-primary">About me</h2>
            <h2 className="text-3xl my-3">
              A dedicated MERN Stack Developer 📍
            </h2>
            <div className="text-neutral-content">
              <p>
                As a Junior MERN Stack Developer, I possess an impressive
                arsenal of skills in <span className="font-medium">HTML</span>,{" "}
                <span className="font-medium">CSS</span>,{" "}
                <span className="font-medium">Tailwind CSS</span> ,{" "}
                <span className="font-medium">Bootstrap</span> ,{" "}
                <span className="font-medium">JavaScript</span> ,{" "}
                <span className="font-medium">Reactjs</span>,{" "}
                <span className="font-medium">Nextjs</span>,{" "}
                <span className="font-medium">Redux</span>,{" "}
                <span className="font-medium">Nodejs</span>,{" "}
                <span className="font-medium">Expressjs</span>, and{" "}
                <span className="font-medium">MongoDB</span> .
              </p>
              <p>
                I excel in designing and maintaining responsive websites that
                offer a smooth user experience.
              </p>
              <p>
                My expertise lies in crafting dynamic, engaging interfaces
                through writing clean and optimized code and utilizing
                cutting-edge development tools and techniques.
              </p>

              <p>
                I have 1 year of experience as Front-End Developer at Pidex
                Limited and 1 year working with local team.
              </p>
            </div>

            <div className="mt-5 sm:mt-8">
              <Link
                href=""
                className="bg-primary-g px-5 py-2.5 text-sm sm:text-base"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
