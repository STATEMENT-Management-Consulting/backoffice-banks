import { Avatar } from "@/components/Avatar/Avatar";
import { Tr } from "@/components/Table/Tr";
import { useProcessSalaryDictionary } from "locales/t/process-salary";
import { Fragment } from "react";

export function ProcessSalaryTableBody() {
  const { translate } = useProcessSalaryDictionary();
  return (
    <>
      {Array(4)
        .fill(0)
        ?.map((_, index) => (
          <Fragment key={index}>
            <Tr>
              <td className="flex items-center gap-x-4">
                <Avatar className="w-6 h-6 rounded-full" name="Mirantes" />
                <div className="stack">
                  <p className="text-body-sm">João Amadeu</p>
                  <span className="text-[10px] text-gray-shade8">
                    joaoamadeu@gmail.com
                  </span>
                </div>
              </td>

              <td className="text-body-sm text-center">00231DC</td>
              <td className="text-body-sm text-center">UX/UI Designer</td>
              <td className="text-body-sm text-center">
                AO06.0040.0000.8587.9259.9996.5
              </td>
              <td className="text-body-sm text-center">AOA -1.131.031,01</td>
              <td className="text-body-sm text-center">AOA 1.131.031,01</td>
              <td className="text-body-sm text-center">AOA 1.131.031,01</td>
              <td className="text-body-sm text-center">AOA 1.131.031,01</td>
            </Tr>
          </Fragment>
        ))}
      <Tr>
        <td className="text-body-sm font-bold items-center gap-x-4">
          {translate("process-salary.table.footer.total-values")}
        </td>

        <td className="text-body-sm text-center font-bold"></td>
        <td className="text-body-sm text-center font-bold"></td>
        <td className="text-body-sm text-center font-bold"></td>
        <td className="text-body-sm text-center font-bold">
          AOA -1.131.031,01
        </td>
        <td className="text-body-sm text-center font-bold">AOA 1.131.031,01</td>
        <td className="text-body-sm text-center font-bold">AOA 1.131.031,01</td>
        <td className="text-body-sm text-center font-bold">AOA 1.131.031,01</td>
      </Tr>
    </>
  );
}
