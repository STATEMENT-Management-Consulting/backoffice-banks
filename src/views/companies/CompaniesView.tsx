import { SearchIcon } from "@/assets/feather-icons/SearchIcon";
import { TrashIcon } from "@/assets/feather-icons/TrashIcon";
import { DateInput } from "@/components/Inputs/DateInput/DateInput";
import { BaseInput } from "@/components/PhoneInput/BaseInput";
import { useCompaniesDictionary } from "locales/t/companies";
import { CompaniesTable } from "./components/CompaniesTable/CompaniesTable";

export function CompaniesView() {
  const { translate } = useCompaniesDictionary();

  return (
    <div className="w-full stack items-center h-full gap-y-10 pt-10">
      <div className="w-full stack gap-y-6 max-w-[80rem]">
        <div className="w-full stack gap-y-2">
          <h4>{translate("companies.title")}</h4>

          <p>{translate("companies.label")}</p>
        </div>

        <div className="flex w-full gap-x-4">
          <BaseInput
            className="w-full bg-white"
            rightElement={SearchIcon}
            placeholder={translate("companies.companies-list.filter.search")}
          />

          <DateInput
            wrapperClassName="!max-w-[13rem] text-gray-shade7"
            className="bg-white text-gray-shade7 maw-w-[13rem]"
          />
        </div>
      </div>

      <div className="bg-white w-full flex-1 stack items-center">
        <div className="layout-max-width  !px-0">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
}
