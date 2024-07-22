import { headers } from "next/headers";

export function getPathname() {
  const pathname = headers().get("x-pathname");

  return pathname ?? undefined;
}
