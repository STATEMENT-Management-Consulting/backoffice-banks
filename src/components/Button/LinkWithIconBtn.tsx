import Link from "next/link";
import { IconType } from "react-icons";

interface ILinkWithIcon {
  route: string;
  Icon: IconType;
  bell?: boolean;
  className?: string;
}

export function LinkWithIconBtn({ route, Icon, className }: ILinkWithIcon) {
  return (
    <Link href={route}>
      <div className={`relative cursor-pointer ${className} hover:opacity-80`}>
        <Icon className="text-[1.125rem] text-dark" />
      </div>
    </Link>
  );
}
