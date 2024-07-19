import { useEffect, useState } from "react";
import { SelectInput } from "../SelectInput/SelectInput";
import { useAPiGetIndustries } from "./api/useApiGetIndustries";

interface IIndustryInput {
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
  disabled?: boolean;
  onChangeOption?: (
    props: { id: string; name: string } & Record<string, string>
  ) => void;
}

export function IndustryInput({
  label,
  value,
  placeholder,
  error,
  disabled,
  onChangeOption,
}: IIndustryInput) {
  const { industries, isGettingIndustries } = useAPiGetIndustries();
  const [industry, setIndustry] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (value && industry === undefined) {
      const currentIndustry = industries?.find(
        (position) => position?.id === value
      );
      setIndustry(currentIndustry?.name);
    }
  }, [industries, value]);

  const handleFilterIndustry = (value?: string) => {
    setIndustry(value);
  };

  const handleOnChange = (ind?: { id: string; name: string }) => {
    handleFilterIndustry(ind?.name);
    onChangeOption?.(ind as any);
  };

  return (
    <SelectInput
      label={label}
      placeholder={placeholder}
      options={industries ?? []}
      required
      disabled={disabled}
      searchable
      onSearchOption={handleFilterIndustry}
      keepOnSelect
      isLoading={isGettingIndustries}
      value={value}
      searchValue={industry}
      onChangeOption={handleOnChange}
      error={error}
    />
  );
}
