import { useCompaniesDictionary } from "locales/t/companies";

export function CompanyOverview() {
  const { translate } = useCompaniesDictionary();

  return (
    <div className="sticky stack gap-y-6 items-start w-[280px] bg-white card">
      <h6 className="font-medium text-primary">Mirantes Technologies</h6>

      <div className="stack gap-y-1">
        <span className="text-body-md text-gray-shade8">
          {translate("company.overview.phone")}
        </span>

        <p className="text-dark-black font-medium text-body-lg">
          +244 919 319 193
        </p>
      </div>
      <div className="stack gap-y-1">
        <span className="text-body-md text-gray-shade8">
          {translate("company.overview.responsible")}
        </span>

        <p className="text-dark-black font-medium text-body-lg">Jack Alexis</p>
      </div>
      <div className="stack gap-y-1">
        <span className="text-body-md text-gray-shade8">
          {translate("company.overview.email")}
        </span>

        <p className="text-dark-black font-medium text-body-lg">
          info.geral@mirantes.io
        </p>
      </div>
      <div className="stack gap-y-1">
        <span className="text-body-md text-gray-shade8">
          {translate("company.overview.website")}
        </span>

        <p className="text-dark-black font-medium text-body-lg">
          <a href="https://www.mirantes.io" target="_blank">
            www.mirantes.io
          </a>
        </p>
      </div>
      <div className="stack gap-y-1">
        <span className="text-body-md text-gray-shade8">
          {translate("company.overview.address")}
        </span>

        <p className="text-dark-black font-medium text-body-lg">
          Angola - Luanda, Maianga, Rua 28 de Maio, Edifício Kende, 7º Andar
        </p>
      </div>

      <div className="stack gap-y-1">
        <span className="text-body-md text-gray-shade8">
          {translate("company.overview.important-document")}
        </span>
      </div>
    </div>
  );
}
