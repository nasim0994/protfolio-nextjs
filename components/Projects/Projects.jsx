import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Projects() {
  return (
    <section className="py-10 sm:py-20" id="projects">
      <div className="container">
        <h2 className="text-primary">Projects</h2>
        <h2 className="text-2xl">
          Each project is a unique piece of development 🧩
        </h2>

        <div className="md:mx-10">
          <div className="project_card">
            <div className="project_img">
              <Link href="https://fitnessgymclub.vercel.app/" target="_blank">
                <Image
                  src="/images/projects/fitnessgymclub.png"
                  alt="fitness gym club"
                  width={500}
                  height={500}
                />
              </Link>
            </div>

            <div className="project_content">
              <h2 className="text-xl">FITNESS GYM CLUB</h2>
              <div className="mt-3 text-neutral-content">
                <p>
                  A gym website is a comprehensive resource for fitness
                  information, class schedules, membership options, and tools to
                  help users achieve their fitness goals.
                </p>
                <p className="mt-2">
                  <span className="text-accent font-medium">Technologies:</span>{" "}
                  Next js, and tailwind CSS.
                </p>
              </div>

              <div className="links">
                <Link
                  href="https://github.com/nasim0994/fitness-gym-club"
                  target="_blank"
                >
                  Code <FiGithub />
                </Link>
                <Link href="https://fitnessgymclub.vercel.app/" target="_blank">
                  Live Demo <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
          </div>

          <div className="project_card">
            <div className="project_img">
              <Link href="https://maxuipro.vercel.app/" target="_blank">
                <Image
                  src="/images/projects/maxui.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
            </div>

            <div className="project_content">
              <h2 className="text-xl">MaxUI (CSS Framework)</h2>
              <div className="mt-3 text-neutral-content">
                <p>
                  MaxUI is a library of components built on top of the utility
                  classes from Tailwind CSS. It is just a demo.
                </p>
                <p className="mt-2">
                  <span className="text-accent font-medium">Technologies:</span>{" "}
                  React.js, and Tailwind CSS.
                </p>
              </div>

              <div className="links">
                <Link href="https://github.com/nasim0994/MaxUI" target="_blank">
                  Code <FiGithub />
                </Link>
                <Link href="https://maxuipro.vercel.app/" target="_blank">
                  Live Demo <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
          </div>

          <div className="project_card">
            <div className="project_content">
              <h2 className="text-xl">MaxUI Dashboard</h2>
              <div className="mt-3 text-neutral-content">
                <p>
                  MaxUI Dashboard is a beautiful admin dashboard with a large
                  number of components, designed to look beautiful and
                  organized.
                </p>
                <p className="mt-2">
                  <span className="text-accent font-medium">Technologies:</span>{" "}
                  HTML, Tailwind CSS, and Javascript.
                </p>
              </div>

              <div className="links">
                <Link
                  href="https://github.com/nasim0994/MaxUi-Dashboard"
                  target="_blank"
                >
                  Code <FiGithub />
                </Link>
                <Link
                  href="https://nasim0994.github.io/MaxUi-Dashboard/"
                  target="_blank"
                >
                  Live Demo <HiOutlineExternalLink />
                </Link>
              </div>
            </div>

            <div className="project_img">
              <Link
                href="https://nasim0994.github.io/MaxUi-Dashboard/"
                target="_blank"
              >
                <Image
                  src="/images/projects/maxui_dashboard.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
