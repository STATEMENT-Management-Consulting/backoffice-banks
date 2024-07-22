import Link from "next/link";

interface ILayoutTab {
  tabName: string;
  href: string;
  isActive: (href: string) => boolean;
  disabled?: boolean;
  className?: string;
  onSettings?: boolean;
}

export function LayoutTab({
  tabName,
  isActive,
  onSettings,
  className,
  href,
  disabled,
}: ILayoutTab) {
  const active = isActive(href);

  if (disabled)
    return (
      <li
        className={`text-body-md  border-b-2 border-b-transparent px-[1.97rem] pb-[0.56rem] font-semibold leading-body-md`}
      >
        {tabName}
      </li>
    );

  return (
    <>
      {onSettings ? (
        <Link
          href={href}
          className={
            active
              ? `pointer-events-none text-primary border-b-primary ${className}`
              : "text-dark-blue-shade2 hover:text-primary border-b-transparent pointer-events-auto"
          }
        >
          {tabName}
        </Link>
      ) : (
        <Link
          href={href}
          className={active ? `pointer-events-none ${className}` : ""}
        >
          <li
            className={`text-body-md border-b-2 ${className} list-none px-[1.97rem] pb-[0.56rem] font-semibold leading-body-md ${
              active
                ? "text-primary border-b-primary"
                : "text-dark-blue-shade2 hover:text-primary border-b-transparent"
            }`}
          >
            {tabName}
          </li>
        </Link>
      )}
    </>
  );
}
