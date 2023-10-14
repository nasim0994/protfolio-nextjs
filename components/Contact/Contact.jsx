import { FiMap } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";

export default function Contact() {
  return (
    <section className="py-10 md:py-20 bg-gray-50" id="contact">
      <div className="container">
        <h2 className="text-primary mb-5">Contact</h2>
        <h2 className="text-2xl sm:text-3xl">
          Don&apos;t be shy! Hit me up! 👇
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 bg-base-100 shadow-lg rounded-full flex justify-center items-center ">
              <FiMap className="text-xl sm:text-2xl text-primary" />
            </div>
            <div>
              <h3 className="text-lg">Location</h3>
              <p className="text-neutral-content">Dhaka, bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-base-100 shadow-lg rounded-full flex justify-center items-center">
              <HiOutlineMail className="text-xl sm:text-3xl text-primary" />
            </div>
            <div>
              <h3 className="text-lg">Email</h3>
              <p className="text-neutral-content">nasimuddin0994@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-base-100 shadow-lg rounded-full flex justify-center items-center">
              <AiOutlineMobile className="text-xl sm:text-3xl text-primary" />
            </div>
            <div>
              <h3 className="text-lg">Number</h3>
              <p className="text-neutral-content">+880 1706 260 994</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
