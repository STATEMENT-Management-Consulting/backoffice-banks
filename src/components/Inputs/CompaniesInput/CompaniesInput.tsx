import { SelectInput } from "../SelectInput/SelectInput";
import { useApiGetCompanies } from "./api/useApiGetCompanies";

type TCompaniesInput = {
  onChangeOption: (value: { id: string; name: string }) => void;
  value: string;
  placeholder: string;
  label?: string;
  error?: string;
};

export function CompaniesInput({
  onChangeOption,
  value,
  placeholder,
  label,
  error,
}: TCompaniesInput) {
  const { companies, isGettingCompanies } = useApiGetCompanies();

  return (
    <SelectInput
      isLoading={isGettingCompanies}
      options={companies}
      searchable
      onChangeOption={onChangeOption as any}
      value={value}
      placeholder={placeholder}
      label={label}
      error={error}
    />
  );
}
