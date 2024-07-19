import { TimesIcon } from "@/assets/feather-icons/TimesIcon";
import { cn } from "@/styles/utils";
import { useComponentsDictionary } from "locales/t/components";
interface IBadge {
  className?: string;
  label?: string;
  value?: string;
  onRemove?: (value: string) => void;
  img?: JSX.Element;
}

export function Badge({ className, onRemove, label, value, img }: IBadge) {
  const translate = useComponentsDictionary();

  return (
    <div className={cn(`badge`, className)}>
      {img}
      <span className="text-[0.6875rem]">{label}</span>
      {onRemove && value && (
        <button
          type="button"
          onClick={() => onRemove(value)}
          className="button-empty"
          title={translate("General.remove", { name: label ?? "" })}
        >
          {TimesIcon}
        </button>
      )}
    </div>
  );
}
