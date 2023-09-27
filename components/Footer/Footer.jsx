import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="py-5 bg-gray-50">
      <div className="container">
        <div className="sm:flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/about/na.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
                width={500}
                height={500}
              />
              <p className="text-neutral-content">
                Copyright © 2023. All rights are reserved
              </p>
            </div>
          </div>

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
      </div>
    </footer>
  );
}
