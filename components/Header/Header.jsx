import Link from "next/link";
import { useState } from "react";
import { BiSun } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";

import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-px">
            <Image
              src="/images/logo/logo.png"
              alt=""
              className="w-9"
              width={500}
              height={500}
            />
            <h1 className="font-bold text-2xl mt-">
              <span className="text-primary">as</span>
              <span className="text-secondary">im.</span>
            </h1>
          </Link>

          <nav>
            <ul className="menu hidden md:flex gap-6 text-[15px]">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="">Blogs</Link>
              </li>
              <li>
                <button className="text-xl mt-px hover:text-primary dark:hover:text-primary text-neutral-content dark:text-gray-400">
                  <BiSun />
                </button>
              </li>
            </ul>

            <ul className="gap-4 text-[15px] menu flex md:hidden">
              <li>
                <button className="text-xl mt-px hover:text-primary text-neutral-content dark:text-gray-400 ">
                  <BiSun />
                </button>
              </li>
              <li>
                <button onClick={() => setMobileMenu(!mobileMenu)}>
                  <RxHamburgerMenu className="text-xl" />
                </button>
              </li>
            </ul>
          </nav>

          <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
        </div>
      </div>
    </header>
  );
}
