import { useEffect, useState } from "react";
import DetectDevice from "./DetectDevice";

// GetDeviceValue(768, 5, 20)
const GetDeviceValue = (size, ltSize, gtSize) => {
  const device = DetectDevice(size);

  // getWindowDimensions
  const [customState, setCustomState] = useState(ltSize);

  useEffect(() => {
    setCustomState(device < size ? ltSize : gtSize);
  }, [device, size, ltSize, gtSize]);

  return customState;
};

export default GetDeviceValue;
