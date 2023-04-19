import { useState, useEffect } from "react";
import debounce from 'lodash/debounce';

export function useScroll() {
  const [scrollX, setScrollX] = useState<number>(0);

  const listener = () => {
    setScrollX(window.pageYOffset);
  };

  const delay = 15;

  useEffect(() => {
    window.addEventListener("scroll", debounce(listener, delay));
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollX
  };
}