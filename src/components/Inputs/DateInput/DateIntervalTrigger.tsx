import { Calendar } from "./Calendar";
import React, { useRef, useState } from "react";
import { useOpen } from "@/utilities/hooks/useOpen";
import { CalenderIcon } from "@/assets/feather-icons/CalenderIcon";
import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";

interface IDateIntervalTrigger {
  className?: string;
}

export function DateIntervalTrigger({ className }: IDateIntervalTrigger) {
  const { isOpen, onClose: close, toggleOpen } = useOpen();
  const [label, setLabel] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleSaveInterval = () => {
    // alert(date);
  };

  useOutsideClick(calendarRef, close);

  return (
    <div ref={calendarRef} className="relative">
      <Calendar
        interval={setLabel}
        show={isOpen}
        save={handleSaveInterval}
        cancel={close}
      />
      <div
        onClick={toggleOpen}
        className={`flex cursor-pointer justify-between group/base-input ${className} border flex items-center gap-x-[0.62rem] px-[1.25rem] py-4 rounded-[0.625rem] min-w-max [&:has(input:auto-fill)]:bg-blue-shade6 w-[344px] h-[48px] ${
          isOpen && "border-gray-400"
        }`}
      >
        <input
          type="button"
          value={label}
          className="outline-none cursor-pointer"
        />
        {CalenderIcon}
      </div>
    </div>
  );
}
