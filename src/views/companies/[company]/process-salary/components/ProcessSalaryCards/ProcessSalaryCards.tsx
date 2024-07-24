import { useProcessSalaryDictionary } from "locales/t/process-salary";
import { ProcessSalaryCard } from "./ProcessSalaryCard";

export function ProcessSalaryCards() {
  const { translate } = useProcessSalaryDictionary();
  return (
    <div className="w-full flex justify-between items-stretch">
      <ProcessSalaryCard
        title={translate("process-salary.cards.total-to-pay.title")}
        value={"AOA 123.020.240,04"}
      >
        <div className="stack gap-y-2 items-start">
          <span className="text-body-sm text-gray-shade8">
            {translate("process-salary.cards.total-to-pay.payment-period")}
          </span>

          <span className="font-bold text-dark-black text-body-md">
            01 Jan 2020 - 05 Fev 2020
          </span>
        </div>
      </ProcessSalaryCard>

      <ProcessSalaryCard
        title={translate("process-salary.cards.total-to-pay.title")}
      >
        <div className="stack w-full gap-y-2">
          <div className="flex w-full gap-y-2 justify-between items-center">
            <span className="text-body-sm text-gray-shade8">
              {translate(
                "process-salary.cards.processing-date.processing-request"
              )}
            </span>

            <span className="font-bold text-dark-black text-body-md">
              Ter, 23 Jan, 2020
            </span>
          </div>

          <div className="flex w-full gap-y-2 justify-between items-center">
            <span className="text-body-sm text-gray-shade8">
              {translate(
                "process-salary.cards.processing-date.processing-approve"
              )}
            </span>

            <span className="font-bold text-dark-black text-body-md">
              Aguardando...
            </span>
          </div>
        </div>
      </ProcessSalaryCard>

      <ProcessSalaryCard
        title={translate("process-salary.cards.total-to-paid.title")}
      >
        <div className="stack w-full gap-y-2">
          <span className="text-primary font-bold text-xl">29</span>
          <div className="flex w-full gap-y-2 justify-between items-center">
            <span className="text-body-sm text-gray-shade8">
              {translate(
                "process-salary.cards.total-to-paid.people-to-paid"
              )}
            </span>
          </div>
        </div>
      </ProcessSalaryCard>
    </div>
  );
}
