import { CheckIcon } from "@/assets/feather-icons/CheckIcon";
import { EditIcon } from "@/assets/feather-icons/EditIcon";

export function FirstTimeCreatorConfigCard({
  label,
  description,
  icon,
  done,
  onClick: onCLick,
  isLoading,
  disabled,
}: {
  label: string;
  description: string;
  icon: JSX.Element;
  done?: boolean;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}) {
  if (isLoading)
    return (
      <div
        className={`group relative w-full transition-all rounded-[12px] p-6 bg-opacity-10 stack items-start gap-y-6 bg-primary`}
      >
        <div className="flex items-center gap-x-6">
          <div
            className={`w-10  h-10 rounded-full bg-[#B8E3FF] [&>svg_*]:fill-primary flex-center `}
          >
            <div className="skeleton w-[40px] h-[40px] rounded-full" />
          </div>

          <div className="skeleton group-even:w-[50px] group-odd:w-[50px] h-[22.4px] rounded-3xl" />
        </div>

        <div className="skeleton w-[248.5px] h-[36px] rounded-full" />
      </div>
    );

  return (
    <div className="relative w-full h-[160px]">
      {done && (
        <button
          type="button"
          className="absolute top-2 right-2"
          onClick={onCLick}
        >
          {EditIcon}
        </button>
      )}
      <div
        onClick={onCLick}
        className={`relative w-full h-full transition-all hover:bg-opacity-25 hover:cursor-pointer rounded-[12px] p-6 bg-opacity-10 stack items-start gap-y-6 ${
          done ? "bg-green-shade2 pointer-events-none" : "bg-primary"
        } ${disabled ? "pointer-events-none opacity-40" : ""}`}
      >
        <div className="flex items-center gap-x-6">
          <div
            className={`w-10  h-10 rounded-full ${
              done
                ? "bg-green-shade6 [&>svg_*]:fill-white"
                : "bg-[#B8E3FF] [&>svg_*]:fill-primary"
            } flex-center `}
          >
            {icon}
          </div>

          {done && (
            <div className="absolute top-4 right-4  [&>svg_*]:fill-white">
              {CheckIcon}
            </div>
          )}

          <h6 className="text-body-lg">{label}</h6>
        </div>

        <div className="stack w-full gap-y-2">
          <span className="text-body-sm text-[#4F627D] font-medium">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
