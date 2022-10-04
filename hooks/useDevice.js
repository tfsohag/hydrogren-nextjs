import { useEffect, useState } from "react";

// useDevice(768, true, false)
// default value is ltSize (true)
const useDevice = (size, ltSize, gtSize) => {
  const [device, setDevice] = useState(size);
  const [value, setValue] = useState(ltSize);

  // set device
  useEffect(() => {
    function viewport() {
      var width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      setDevice(width);
    }
    viewport();
    window.onresize = viewport;
  }, []);

  // set value
  useEffect(() => {
    setValue(device <= size ? ltSize : gtSize);
  }, [device, size, ltSize, gtSize]);

  return value;
};

export default useDevice;
