import Link from "next/link";

interface IRecruitmentLayoutRoute {
  href: string;
  name: string;
  isCurrent: boolean;
}

export function RecruitmentLayoutRoute({
  href,
  name,
  isCurrent,
}: IRecruitmentLayoutRoute) {
  return (
    <Link href={href} className={isCurrent ? "pointer-events-none" : undefined}>
      <div
        className={`text-dark-blue-shade2 text-[0.875rem] font-bold py-[1.25rem] border-b-[0.125rem] px-[3.12rem] select-none ${
          isCurrent
            ? "border-b-primary text-primary"
            : "border-b-transparent hover:text-primary"
        }`}
      >
        {name}
      </div>
    </Link>
  );
}
