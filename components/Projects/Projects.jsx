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
                  Technologies: React.js, and Tailwind CSS.
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
                  Technologies: HTML, Tailwind CSS, and Javascript.
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

          <div className="project_card">
            <div className="project_img">
              <Link
                href="https://e-learning-fawn-iota.vercel.app/"
                target="_blank"
              >
                <Image
                  src="/images/projects/e-learning.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
            </div>

            <div className="project_content">
              <h2 className="text-xl">E-learning</h2>
              <div className="mt-3 text-neutral-content">
                <p>
                  E-learning is a website selling online courses. This is a
                  bootstrap landing page.
                </p>
                <p className="mt-2">Technologies: HTML, and Bootstrap.</p>
              </div>

              <div className="links">
                <Link
                  href="https://github.com/nasim0994/e-learning"
                  target="_blank"
                >
                  Code <FiGithub />
                </Link>
                <Link
                  href="https://e-learning-fawn-iota.vercel.app/"
                  target="_blank"
                >
                  Live Demo <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
