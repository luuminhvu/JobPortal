"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

type Props = {};
export const ScrollToTop = ({}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          className="w-12 h-12 flex items-center justify-center focus:outline-none rounded-full text-white bg-blue-500 transition-all duration-300"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
