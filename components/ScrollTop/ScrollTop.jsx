"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollTop() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    scroll && (
      <div className="fixed right-2 bottom-2 md:right-8 md:bottom-8">
        <Link
          href="#home"
          className="bg-base-100 w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg flex justify-center items-center text-primary text-xl md:text-2xl"
        >
          <BsArrowUp />
        </Link>
      </div>
    )
  );
}
