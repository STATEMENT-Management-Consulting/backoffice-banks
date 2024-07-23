import { Table } from "@/components/Table/Table";
import { CompaniesTableBody } from "./CompaniesTableBody";
import { useCompaniesDictionary } from "locales/t/companies";
import dynamic from "next/dynamic";
import { PaginationFooter } from "@/components/PaginationFooter/PaginationFooter";
import { SelectInput } from "@/components/Inputs/SelectInput/SelectInput";

export function CompaniesTable() {
  const { translate } = useCompaniesDictionary();
  const CompaniesTableHead = dynamic(
    () => import("./CompaniesTableHead").then((mod) => mod.CompaniesTableHead),
    {
      ssr: false,
    }
  );

  return (
    <div className="w-full stack items-center">
      <div className="w-full !px-0 py-10 stack gap-y-10">
        <div className="w-full flex items-center justify-between">
          <h4>{translate("companies.companies-list.title")}</h4>

          <SelectInput
            placeholder={translate("companies.companies-list.order-by.label")}
            className="bg-[#646A7820] !py-1 !px-2"
            wrapperClassName="!w-[188px] !text-body-sm"
            clearBtn
            floatOptions
            options={[
              {
                id: "descendent",
                name: translate(
                  "companies.companies-list.order-by.options.descendent"
                ),
              },
            ]}
          />
        </div>

        <Table tHead={<CompaniesTableHead />}>
          <CompaniesTableBody />
        </Table>
      </div>

      <PaginationFooter
        hasNextPage={false}
        hasPreviousPage={true}
        isFetching={false}
        changeCurrentPage={() => {}}
        currentPage={1}
        numberOfPages={4}
        changeElementsToShow={() => {}}
        showingElements={2}
        totalOfElements={3}
      />
    </div>
  );
}
