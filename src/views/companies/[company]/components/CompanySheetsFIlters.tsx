import { SearchIcon } from "@/assets/feather-icons/SearchIcon";
import { SelectInput } from "@/components/Inputs/SelectInput/SelectInput";
import { BaseInput } from "@/components/PhoneInput/BaseInput";
import { useCompaniesDictionary } from "locales/t/companies";

export function CompanySheetsFilter() {
  const { translate } = useCompaniesDictionary();

  return (
    <div className="w-full !py-0 max-w-[80rem] !px-0 flex items-center gap-x-5">
      <SelectInput
        wrapperClassName="max-w-[10rem]"
        className="bg-white !py-2 !rounded-md"
        options={[]}
      />
      <BaseInput
        inputClassName="!placeholder:text-body-sm !text-body-sm"
        className="max-w-[283px] !placeholder:text-body-sm !py-2 !text-body-sm bg-white"
        placeholder={translate("company.filters.search")}
        rightElement={SearchIcon}
      />
    </div>
  );
}
