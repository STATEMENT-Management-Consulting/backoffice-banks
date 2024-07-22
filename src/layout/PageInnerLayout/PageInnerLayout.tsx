import { ReactNode } from "react";
import { ISubMenuRoute } from "../SubMenu/SubMenuRoute";
import Head from "next/head";
import { cn } from "@/styles/utils";
import { SubMenu } from "../SubMenu/SubMenu";

export interface IPageInnerLayout {
  aside?: ReactNode;
  routes?: ISubMenuRoute[];
  children: ReactNode;
  className?: string;
  name?: string;
  title?: string;
  backRoute?: string;
  header?: ReactNode;
  baseRoute?: string;
  childrenHasCard?: boolean;
}

export function PageInnerLayout({
  children,
  className,
  routes,
  title,
  header,
  baseRoute,
  childrenHasCard = true,
}: IPageInnerLayout) {
  return (
    <>
      {title && <Head>{title} | Mirantes</Head>}
      <div className={cn(className, "stack gap-y-8 pt-8 layout-max-width")}>
        <div className="grid grid-cols-[300px_1fr] grid-rows-[auto_1fr] gap-x-8">
          <SubMenu
            routes={routes ?? []}
            baseRoute={baseRoute}
            className={
              "col-start-1 row-start-2 sticky top-8 stack gap-y-8 pb-8 h-min"
            }
          />
          <div className="row-start-2 col-start-2 children stack gap-y-8">
            {header}
            {childrenHasCard ? (
              <div className="card">{children}</div>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </>
  );
}
