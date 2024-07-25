import { SearchIcon } from "@/assets/feather-icons/SearchIcon";
import { Button } from "@/components/Button/Button";
import { SelectInput } from "@/components/Inputs/SelectInput/SelectInput";
import { useManagersDictionary } from "locales/t/managers";
import { ManagersList } from "./components/ManagersList/ManagersList";

export function ManagersView() {
  const { translate } = useManagersDictionary();

  return (
    <div className="w-full stack pt-10 items-center h-full gap-y-8">
      <div className="max-w-[80rem] stack gap-y-6 items-start w-full">
        <div className="stack items-start gap-y-2">
          <h4>{translate("managers.title")}</h4>

          <p>{translate("managers.label")}</p>
        </div>

        <h5 className="text-body-xl">
          {translate("managers.invite-managers.title")}
        </h5>

        <div className="flex gap-x-6">
          <SelectInput
            leftIcon={SearchIcon}
            searchable
            wrapperClassName="min-w-[37rem]"
            className="bg-white"
            placeholder={translate("managers.invite-managers.search.label")}
          />

          <Button
            className="button-primary text-white px-6 bg-primary"
            label={translate("managers.invite-managers.search.send-invite")}
          />
        </div>
      </div>

      <div className="flex-1 stack items-center bg-white w-full">
        <ManagersList />
      </div>
    </div>
  );
}
