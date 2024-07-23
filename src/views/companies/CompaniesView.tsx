import { useCompaniesDictionary } from "locales/t/companies";

export function CompaniesView() {
  const { translate } = useCompaniesDictionary();
  return (
    <div className="w-full stack items-center gap-y-8 pt-10">
      <div className="w-full max-w-[80rem]">
        <div className="w-full stack gap-y-2">
          <h4>{translate("companies.title")}</h4>

          <p>{translate("companies.label")}</p>
        </div>
      </div>
    </div>
  );
}
