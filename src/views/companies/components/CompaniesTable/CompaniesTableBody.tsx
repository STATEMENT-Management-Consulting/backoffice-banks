import { Eye } from "@/assets/feather-icons/Eye";
import { Avatar } from "@/components/Avatar/Avatar";
import { Badge } from "@/components/Badge/Badge";
import { Tr } from "@/components/Table/Tr";
import { useCompaniesDictionary } from "locales/t/companies";
import { Fragment } from "react";

export function CompaniesTableBody() {
  const data = Array(4).fill(0);
  const { translate } = useCompaniesDictionary();

  return data.map((_, index) => (
    <Fragment key={index}>
      <Tr>
        <td className="flex items-center gap-x-4">
          <Avatar className="w-6 h-6 rounded-full" name="Mirantes" />
          <div className="stack">
            <p className="text-body-sm">Mirantes Technologies</p>
            <span className="text-[10px] text-gray-shade8">rh@mirantes.io</span>
          </div>
        </td>

        <td className="text-body-sm">Tecnologia</td>
        <td className="text-body-sm bold">
          {" "}
          <div className="stack">
            <p className="text-body-sm">José Fernandes</p>
            <span className="text-[10px] text-gray-shade8">
              jose.ferandes@mirantes.io
            </span>
          </div>
        </td>
        <td className="text-body-sm">02/03/2023</td>
        <td className="text-body-sm font-bold">02/03/2023</td>
        <td className="text-body-sm">
          <Badge
            label="Processado"
            className="bg-green-shade2 [&>_*]:text-green-shade6 bg-opacity-10 flex-center"
          />
        </td>
        <td className="text-body-sm stack">
          <button className="flex items-center">
            <div className="[&>svg_*]:fill-primary w-4 h-4 flex-center">{Eye}</div>{" "}
            <span className="text-primary text-body-sm">
              {translate("companies.companies-list.table.thead.view-company")}
            </span>
          </button>
        </td>
      </Tr>
    </Fragment>
  ));
}
