import { MirantesSimple } from "@/assets/MiratesSimple";
import { useEffect, useState } from "react";

export function RootLayoutPageLoad() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (!pageLoaded) {
      const handleLoad = () => {
        setTimeout(() => {
          setPageLoaded(true);
        }, 3000);
      };

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  });

  if (pageLoaded) return null;

  return (
    <div className="fixed inset-0 z-[9999999] bg-white flex-center pathToAnimate">
      <MirantesSimple loader />
    </div>
  );
}
