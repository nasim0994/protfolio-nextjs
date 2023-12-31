export default function Experience() {
  return (
    <section className="py-10 md:py-16" id="experience">
      <div className="container">
        <h2 className="text-primary">Experience</h2>

        <ul className="mt-6 list-disc pl-10">
          <li>
            <h3 className="text-xl sm:text-2xl font-medium">
              Front-End Developer
            </h3>
            <h4 className="sm:text-lg">Pidex Limited</h4>
            <div className="flex items-center italic gap-20 text-secondary text-sm">
              <p>01-2023 - present</p>
              <p>Dhaka</p>
            </div>
          </li>

          <br />

          <li>
            <h3 className="text-xl sm:text-2xl font-medium">Web Designer</h3>
            <h4 className="sm:text-lg">regisroumila</h4>
            <div className="flex items-center italic gap-20 text-secondary text-sm">
              <p>12-2020 - 01-2022</p>
              <p>Remote(USA)</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
