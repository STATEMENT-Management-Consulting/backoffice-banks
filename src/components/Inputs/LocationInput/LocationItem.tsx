import { LocationIcon } from "@/assets/feather-icons/LocationIcon";

interface ILocationItem {
  className?: string;
  value: string;
  onSelect?: () => void;
}

export function LocationItem({ className, onSelect, value }: ILocationItem) {
  return (
    <div
      aria-label="select input"
      role="button"
      className={`cursor-pointer pr-4 py-[1.06rem] min-w-[200px] text-left first:rounded-t-[0.625rem] last:rounded-b-[0.625rem] text-text font-normal hover:!text-primary pl-4 hover:pl-6 hover:bg-primary hover:bg-opacity-10 transition-[padding] [&:hover>svg>*]:stroke-primary flex items-center justify-start gap-x-[0.62rem] ${className}`}
      onClick={onSelect}
    >
      {LocationIcon}
      <span dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

LocationItem.displayName = "LocationItem ";
