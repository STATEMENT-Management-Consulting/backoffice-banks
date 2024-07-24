import { useManagersDictionary } from "locales/t/managers";
import _ from "lodash";
import { ManagerItem } from "./ManagerItem";
import { Fragment } from "react";

export function ManagersList() {
  const { translate } = useManagersDictionary();

  return (
    <div className="w-full layout-max-width !px-0 stack items-start gap-y-8">
      <h5 className="text-xl"> {translate("managers.title")}</h5>

      <div className="stack w-full max-w-[48.43rem] gap-y-6">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <Fragment key={index}>
              <ManagerItem
                name="David Zacarias"
                email="zacarias.miguel@mirantes.io"
                role={translate("managers.roles.manager")}
              />
            </Fragment>
          ))}

        <div className="rule-horizontal" />

        <p className="text-body-md text-gray-shade7">
          {translate("managers.invite-managers.invites.pending-invites")}
        </p>

        <ManagerItem
          name="David Zacarias"
          email="zacarias.miguel@mirantes.io"
          role={translate("managers.roles.manager")}
        />
      </div>
    </div>
  );
}
