import { useEffect, useState } from "react";
import { useApiGetPositions } from "./api/useApiGetPositions";
import { SelectInput } from "../SelectInput/SelectInput";
import { useComponentsDictionary } from "locales/t/components";
import { SearchIcon } from "@/assets/feather-icons/SearchIcon";

type TPosition = { id: string; name: string };

type TCompaniesInput = {
  onChangeOption: (value: TPosition) => void;
  value: string;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  initialSearchValue?: string;
  className?: string;
  floatOptions?: boolean;
};

export function PositionsInput({
  onChangeOption,
  value,
  placeholder,
  label,
  error,
  className,
  required,
  floatOptions,
}: TCompaniesInput) {
  const { positions, isGettingPositions } = useApiGetPositions();
  const [search, setSearch] = useState("");

  const filteredPositions: Array<{ id: string; name: string }> = !search
    ? []
    : positions?.filter((position) =>
        position.name.toLowerCase().includes(search.toLowerCase())
      );

  const handleFilterPosition = (value: string) => {
    setSearch(value);
  };

  const translate = useComponentsDictionary();

  return (
    <SelectInput
      rightIcon={SearchIcon}
      isLoading={isGettingPositions}
      options={filteredPositions}
      value={value}
      searchable
      onChangeOption={(value) => {
        handleFilterPosition(value?.name);
        onChangeOption(value);
      }}
      floatOptions={floatOptions}
      onSearchOption={handleFilterPosition}
      searchValue={search}
      required={required}
      placeholder={placeholder ?? translate("Positions-Input.placeholder")}
      label={label ?? translate("Positions-Input.label")}
      error={error}
      className={className}
    />
  );
}
