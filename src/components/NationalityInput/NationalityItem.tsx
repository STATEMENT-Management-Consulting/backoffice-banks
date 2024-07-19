import { CountryType } from "@/utilities/utils/types";
import { cn } from "../../styles/utils";

interface ICountryItem {
  className?: string;
  country: CountryType;
  onSelect?: () => void;
  isSelected?: boolean;
}

export function NationalityItem({
  className,
  onSelect,
  country,
  isSelected,
}: ICountryItem) {
  return (
    <div
      aria-label="select input"
      role="button"
      className={cn(
        className,
        `cursor-pointer pr-4 py-[1.06rem] min-w-[200px] text-left first:rounded-t-[0.625rem] last:rounded-b-[0.625rem] text-text font-normal flex items-center justify-start gap-x-[0.62rem] pl-4 [&:hover>div:first-child]:mr-4`,
        isSelected
          ? " !text-primary bg-primary bg-opacity-10"
          : " hover:!text-primary  hover:bg-primary hover:bg-opacity-10 transition-[padding]"
      )}
      onClick={onSelect}
    >
      <div className="w-8 h-6 transition-all rounded-[2px]">
        <img
          src={country.flag.url ?? ""}
          alt={country?.flag?.url ?? ""}
          className="w-8 h-6 object-cover rounded-[2px]"
        />
      </div>
      {country.name}
    </div>
  );
}

NationalityItem.displayName = "NationalityItem ";
