import { useEffect, useState } from "react";

export const useDeviceDetector = (size) => {
  const [windowSize, setWindowSize] = useState(size);
  useEffect(() => {
    function showViewport() {
      var width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      setWindowSize(width);
    }
    showViewport();
    window.onresize = showViewport;
  }, []);

  return windowSize;
};
