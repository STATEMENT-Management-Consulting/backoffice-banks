import { useOpen } from "@/utilities/hooks/useOpen";
import { useComponentsDictionary } from "locales/t/components";
import { ReactNode, useRef, useState } from "react";

interface ISeeMoreAndLessCard {
  children: ReactNode;
  maxH?: string;
  className?: string;
  toggle?: (isOpen: boolean, onClick: () => void) => JSX.Element;
}

export function SeeMoreAndLessCard({
  children,
  className,
  maxH = "200px",
  toggle,
}: ISeeMoreAndLessCard) {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, toggleOpen } = useOpen();
  const [clamped, setClamped] = useState<boolean>(false);
  const t = useComponentsDictionary();

  const isTextClamped = () => {
    if (ref?.current) {
      return ref?.current?.scrollHeight > ref?.current?.clientHeight;
    }
    return false;
  };

  const onMouseEnter = () => {
    if (!clamped) setClamped(isTextClamped());
  };

  const onMouseLeave = () => {
    if (clamped && !isOpen) {
      setClamped(false);
    }
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div
        ref={ref}
        className={`overflow-hidden peer-children ${className}`}
        style={{ maxHeight: isOpen ? "max-content" : maxH }}
      >
        {children}
      </div>
      {toggle?.(isOpen, toggleOpen) ?? (
        <div className="flex justify-center">
          <button
            className={`button-empty my-2 text-primary underline cursor-pointer ${
              clamped ? "block" : "hidden"
            } `}
            onClick={toggleOpen}
            type="button"
          >
            {t(isOpen ? "SeeMoreAndLessCard.less" : "SeeMoreAndLessCard.more")}
          </button>
        </div>
      )}
    </div>
  );
}
