import { useEffect, useState } from "react";
import { useDeviceDetector } from "./useDeviceDetector";

// useDeviceValue(768, 5, 20)
export const useDeviceValue = (size, ltSize, gtSize) => {
  const device = useDeviceDetector(size);
  const [customState, setCustomState] = useState(ltSize);

  useEffect(() => {
    setCustomState(device >= size ? gtSize : ltSize);
  }, [device, size, ltSize, gtSize]);

  return customState;
};
