import { useEffect, useLayoutEffect, useState } from "react"

export const useResize = (width: number) => {
  const [isSmaller, setIsSmaller] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmaller(window.innerWidth < width);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmaller;
}