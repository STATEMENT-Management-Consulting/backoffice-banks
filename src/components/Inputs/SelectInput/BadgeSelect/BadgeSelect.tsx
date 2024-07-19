import { ChevronDownIcon } from "@/assets/feather-icons/ChevronDownIcon";
import { useOpen } from "@/utilities/hooks/useOpen";
import { BadgeSelectContainer } from "./BadgeSelectContainer";
import { useRef } from "react";

interface IBadgeSelect {
  value: string;
  onChange: (value: { name: string; id: string; color?: string }) => void;
  options: Array<{
    id: string;
    name: string;
    color: string;
  }>;
  hasPermission?: boolean;
}

export function BadgeSelect({
  value,
  onChange,
  options,
  hasPermission,
}: IBadgeSelect) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen, onClose: close, toggleOpen } = useOpen();

  const filteredOptions = options.filter((option) => option.id !== value);

  const currentValue = options?.find((option) => option?.id === value);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <button
          type="button"
          className={`button-empty w-full`}
          disabled={!hasPermission}
          onClick={toggleOpen}
        >
          <div
            className={`badge !rounded-lg text-body-sm justify-center ${currentValue?.color} w-full`}
          >
            {currentValue?.name}
          </div>
          {!hasPermission ? null : (
            <div
              role="button"
              className={`transition-transform w-5 h-5 flex-center ${
                isOpen ? "-rotate-180" : "rotate-0"
              }`}
            >
              {ChevronDownIcon}
            </div>
          )}
        </button>
        {isOpen && (
          <BadgeSelectContainer
            containerRef={containerRef}
            options={filteredOptions}
            close={close}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}
