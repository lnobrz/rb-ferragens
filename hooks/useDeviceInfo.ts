import { useEffect, useState } from "react";

const useDeviceInfo = () => {
  const [currentDevice, setCurrentDevice] = useState<
    "desktop" | "mobile" | undefined
  >(undefined);

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
