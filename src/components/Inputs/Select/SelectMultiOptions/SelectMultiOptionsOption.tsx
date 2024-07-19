import { CheckboxInput } from "@/components/Checkbox/Checkbox";

interface ISelectMultiOptionsOption {
  id?: string;
  name?: string;
  onClick: () => void;
}

export function SelectMultiOptionsOption({
  id,
  onClick,
  name,
}: ISelectMultiOptionsOption) {
  return (
    <div
      role="option"
      className="flex items-center text-text hover:!text-primary px-4 py-2 cursor-pointer"
      onClick={onClick}
    >
      <CheckboxInput value />
      {name}
    </div>
  );
}
