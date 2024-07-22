import { useState, useEffect } from "react";

export function useIsTouchScreen() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    const updateIsTouchScreen = () => {
      if (
        "ontouchstart" in window ||
        (window.TouchEvent && document instanceof TouchEvent)
      ) {
        setIsTouchScreen(true);
      } else {
        setIsTouchScreen(false);
      }
    };

    updateIsTouchScreen();

    // Listen for changes in touchscreen status (if the user changes the device's configuration)
    window.addEventListener("touchstart", updateIsTouchScreen);

    return () => {
      window.removeEventListener("touchstart", updateIsTouchScreen);
    };
  }, []);

  return isTouchScreen;
}
