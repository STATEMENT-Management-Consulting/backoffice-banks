import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";
import { RefObject } from "react";

interface IBadgeSelectContainer {
  close: () => void;
  currentOption?: string;
  containerRef: RefObject<HTMLDivElement>;
  onChange?: (props: { name: string; id: string; color?: string }) => void;
  searchable?: boolean;
  isLoading?: boolean;
  options: Array<{
    id: string;
    name: string;
    color?: string;
  }>;
}

export function BadgeSelectContainer({
  close,
  containerRef,
  options,
  onChange,
}: IBadgeSelectContainer) {
  useOutsideClick(containerRef, close);

  return (
    <div className="relative z-20 min-w-full w-max">
      <div className="absolute z-20 right-0  top-5 bg-white shadow-md  rounded-[0.75rem] stack gap-2 divide-y w-full min-w-max p-2 max-h-[200px] overflow-y-auto">
        {options?.map((value) => (
          <button
            type="button"
            key={value?.id}
            className={`badge ${value?.color} min-w-max w-full hover:bg-opacity-80 `}
            onClick={() => {
              onChange?.(value);
              close();
            }}
          >
            {value?.name}
          </button>
        ))}
      </div>
    </div>
  );
}
