import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileMenu({ mobileMenu, setMobileMenu }) {
  return (
    <>
      <button
        onClick={() => setMobileMenu(false)}
        className={`fixed top-0 left-0 w-full h-screen bg-[#00000065] z-[99999] ${
          mobileMenu ? "block" : "hidden"
        }`}
      ></button>

      <nav
        className={`fixed top-0 bg-base-100 w-72 h-screen z-[99999] shadow-lg duration-300 ${
          mobileMenu ? "right-0" : "-right-full"
        }`}
      >
        <div className="px-4 pt-4 flex justify-end">
          <button onClick={() => setMobileMenu(false)} className="text-end">
            <AiOutlineClose />
          </button>
        </div>
        <ul className="h-full flex flex-col gap-2 p-6 text-[17px] text-center">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="">Blogs</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
