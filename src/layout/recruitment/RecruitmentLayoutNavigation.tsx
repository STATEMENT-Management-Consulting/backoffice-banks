import { recruitmentRoutes } from "./recruitmentRoutes";
import { RecruitmentLayoutRoute } from "./RecruitmentLayoutRoute";
import { usePathname } from "@/utilities/hooks/usePathname";
import { useLayoutDictionary } from "locales/t/layout";

export function RecruitmentLayoutNavigation() {
  const t = useLayoutDictionary();
  const pathname = usePathname();

  const getSubRouteName = (subRoute: string) =>
    t(`routes./recruitment.sub-routes.${subRoute}.name` as any);

  const isCurrent = (subRoute: string) =>
    !!pathname?.startsWith(`/recruitment${subRoute}`);

  return (
    <div className="sticky top-0 z-20 bg-blue-shade9 w-full flex justify-center">
      <nav
        aria-label="Recruitment Routes"
        className="layout-max-width !py-0 flex justify-center"
      >
        {recruitmentRoutes?.map((route) => (
          <RecruitmentLayoutRoute
            key={route.href}
            href={`/recruitment${route.href}`}
            name={getSubRouteName(route.href)}
            isCurrent={isCurrent(route.href)}
          />
        ))}
      </nav>
    </div>
  );
}
