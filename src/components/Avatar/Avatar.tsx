import { UserIcon } from "@/assets/feather-icons/UserIcon";
import { getAcronym } from "@/utilities/helpers/names";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { ReactNode } from "react";
import { FiBriefcase } from "react-icons/fi";

interface IAvatar {
  src?: string;
  name?: string;
  className?: string;
  fallbackClassName?: string;
  rootClassName?: string;
  delayMs?: number;
  fallback?: ReactNode;
  imageClassName?: string;
  isCompany?: boolean;
}

export function Avatar({
  src,
  name,
  fallbackClassName,
  imageClassName,
  className,
  rootClassName,
  delayMs,
  fallback,
  isCompany,
}: IAvatar) {
  return (
    <RadixAvatar.Root className={rootClassName}>
      <RadixAvatar.Image
        className={`rounded-full ${className} ${imageClassName} `}
        src={src}
        alt={name}
        style={{ objectFit: "cover" }}
      />
      {fallback ?? (
        <RadixAvatar.Fallback delayMs={delayMs}>
          <div
            className={`${className} ${fallbackClassName} bg-primary bg-opacity-10 text-primary [&>svg]:h-[1rem] [&>svg]:w-[1rem] [&>svg_*]:stroke-primary flex flex-center text-body-xs rounded-full `}
          >
            {isCompany ? <FiBriefcase /> : name ? getAcronym(name) : UserIcon}
          </div>
        </RadixAvatar.Fallback>
      )}
    </RadixAvatar.Root>
  );
}
