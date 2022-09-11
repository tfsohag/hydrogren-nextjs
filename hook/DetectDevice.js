import { useEffect, useState } from "react";

// DetectDevice(768)
const DetectDevice = (size) => {
  // getWindowDimensions
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

export default DetectDevice;
