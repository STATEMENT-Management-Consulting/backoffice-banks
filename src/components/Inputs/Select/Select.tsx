import { cn } from "@/styles/utils";

interface ISelect {
  className?: string;
  legend?: string;
  active: boolean;
  label: string;
  onClick: () => void;
}

export function Select({ className, legend, active, label, onClick }: ISelect) {
  return (
    <div className="stack gap-y-2">
      <div
        role="button"
        className={cn(
          "border border-gray-shade11  rounded-md text-dark-black flex items-center justify-between p-4",
          active ? "border-green-shade7" : "",
          className
        )}
        onClick={onClick}
      >
        {label}

        <div
          className={cn(
            "h-5 w-5 rounded-full border-4",
            active ? "border-green-shade6" : "border-gray-shade7"
          )}
        />
      </div>
      {legend && (
        <label className={cn(`!text-body-sm text-gray-500 self-start`)}>
          {legend}
        </label>
      )}
    </div>
  );
}
