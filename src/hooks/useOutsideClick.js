import { useEffect } from "react";

export default function useOutsideClick(element, handler) {
  const action = useEffect(
    function () {
      function handleClick(e) {
        if (element.current && !element.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler, element],
  );

  return { action };
}
