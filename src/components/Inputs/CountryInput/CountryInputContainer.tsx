import { RefObject } from "react";
import { CountryItem } from "./CountryItem";
import { CountryType } from "./hooks/useApiGetAllCountries";
import { cn } from "@/styles/utils";

interface ILocationInputContainer {
  containerRef: RefObject<HTMLDivElement>;
  country: string;
  onSelectCountry: (country: CountryType) => void;
  close: () => void;
  countries: CountryType[];
  isGettingCountries?: boolean;
  float?: boolean;
}

export function CountryInputContainer({
  onSelectCountry: onSelectLocation,
  countries,
  country: selected,
  float = true,
}: ILocationInputContainer) {
  return (
    <div className="relative">
      <div
        className={cn(
          "top-5 z-10 inset-x-0 bg-white shadow-md rounded-[0.75rem] stack gap-2 divide-y divide-border",
          float ? "absolute" : "relative mb-4"
        )}
      >
        {!!countries?.length && (
          <div className="stack gap-2 max-h-[200px] overflow-y-auto">
            {countries.map((country, index) => (
              <CountryItem
                key={index}
                onSelect={() => onSelectLocation?.(country)}
                country={country}
                isSelected={country?.name.common === selected}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
