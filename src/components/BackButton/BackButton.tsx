import { useRouter } from "next/navigation";
import { ChevronLeftIconFill } from "@/assets/feather-icons/ChevronLeftIconFill";

interface IBackButton {
  label?: any;
  className?: string;
  backPageOutside?: () => void;
}

export function BackButton({ label, className, backPageOutside }: IBackButton) {
  const { back } = useRouter();

  return (
    <button
      className="p-0"
      type="button"
      onClick={backPageOutside ? backPageOutside : back}
    >
      {ChevronLeftIconFill}
      <div className={className}>{label}</div>
    </button>
  );
}
