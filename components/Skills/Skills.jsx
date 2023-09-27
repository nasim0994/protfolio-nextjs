import Image from "next/image";

export default function Skills() {
  return (
    <section className="py-10 sm:py-20 bg-gray-50" id="skills">
      <div className="container">
        <h2 className="text-primary">Skills</h2>

        <div className="mt-4">
          <div className="sm:flex gap-2 items-center mb-4">
            <p>Comfortable:</p>
            <div className="flex gap-2 items-center text-2xl">
              <div className="skill">
                <Image
                  src="/images/skills/html.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="skill">
                <Image
                  src="/images/skills/css.webp"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="skill">
                <Image
                  src="/images/skills/bootstrap.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="skill">
                <Image
                  src="/images/skills/tailwind.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="skill">
                <Image
                  src="/images/skills/js.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="skill">
                <Image
                  src="/images/skills/react.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="skill">
                <Image
                  src="/images/skills/redux.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="skill">
                <Image
                  src="/images/skills/next.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/*Familiar */}
          <div className="sm:flex gap-2 items-center mb-4">
            <p>Familiar:</p>
            <div className="flex gap-2">
              <div className="skill">
                <Image
                  src="/images/skills/ts.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="skill">
                <Image
                  src="/images/skills/firebase.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="skill">
                <Image
                  src="/images/skills/express.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="skill">
                <Image
                  src="/images/skills/mongodb.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="sm:flex gap-2 items-center">
            <p>Tools:</p>
            <div className="flex gap-2">
              <div className="skill">
                <Image
                  src="/images/skills/git.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="skill">
                <Image
                  src="/images/skills/github.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="skill">
                <Image
                  src="/images/skills/devtool.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
