import { useEffect, useState } from "react";
import { devices } from "./types";

const useDeviceInfo = () => {
  const [currentDevice, setCurrentDevice] = useState<devices>(undefined);

  useEffect(() => {
    window.innerWidth > 1000
      ? setCurrentDevice("desktop")
      : setCurrentDevice("mobile");

    window.addEventListener("resize", () => {
      window.innerWidth > 1000
        ? setCurrentDevice("desktop")
        : setCurrentDevice("mobile");
    });
  }, []);

  return currentDevice;
};

export default useDeviceInfo;
