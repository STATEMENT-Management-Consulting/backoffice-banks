import { useRouter } from "next/router";

export function usePathname() {
  const { pathname } = useRouter();

  return pathname;
}
