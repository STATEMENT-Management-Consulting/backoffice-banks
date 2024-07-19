import { cn } from "@/styles/utils";

interface Props {
  property: string;
  value?: JSX.Element | string;
  valueElement?: React.ReactNode;
  className?: string;
  propertyClass?: string;
  valueClass?: string;
}

export function PropertyValue({
  property,
  value,
  className,
  propertyClass,
  valueClass,
  valueElement,
}: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-[max-content_1fr] justify-between gap-[1rem]",
        className
      )}
    >
      <span className={cn("text-gray-shade8 text-[0.875rem]", propertyClass)}>
        {property}
      </span>
      {valueElement ? (
        <div className="[&_*]:text-gray-shade16">{valueElement}</div>
      ) : (
        <span
          className={cn(
            "text-gray-shade16 text-right font-semibold text-[0.875rem]",
            valueClass
          )}
        >
          {value}
        </span>
      )}
    </div>
  );
}
