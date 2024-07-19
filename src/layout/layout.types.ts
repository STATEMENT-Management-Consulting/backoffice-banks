import type { ReactNode } from "react";

export interface NextAppPage<T = {}> {
  children: ReactNode;
  params: {
    locale: string;
  } & T;
}
