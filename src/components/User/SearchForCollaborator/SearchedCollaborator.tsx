import { Avatar } from "@/components/Avatar/Avatar";
import { getFirstAndLastName } from "@/utilities/helpers/names";

interface ISearchedCollaborator {
  className?: string;
  avatar?: string;
  selected?: boolean;
  onSelect?: () => void;
  position?: { id: string; name: string };
  name?: string;
  email: string;
  disabled?: boolean;
}

export function SearchedCollaborator({
  className,
  onSelect,
  avatar,
  selected,
  position,
  name,
  disabled,
  email,
}: ISearchedCollaborator) {
  return (
    <div
      aria-label="select input"
      role="option"
      aria-selected={selected}
      className={`cursor-pointer pr-4 py-[1.06rem] min-w-[200px] text-left first:rounded-t-[0.625rem] last:rounded-b-[0.625rem] text-text font-normal pl-4 flex items-center justify-start gap-x-[0.62rem] ${
        disabled
          ? ""
          : `hover:pl-6 hover:bg-primary hover:bg-opacity-10 transition-[padding] [&:hover>svg>*]:stroke-primary`
      } ${className}`}
      onClick={onSelect}
    >
      <Avatar
        src={avatar}
        name={name ?? ""}
        className="w-[2rem] h-[2rem] rounded-full"
      />
      <div>
        <p className="text-text-dark " title={name}>
          {getFirstAndLastName(name ?? "")}
        </p>
        {position ? (
          <p className="text-body-sm">{position?.name}</p>
        ) : (
          <p className="text-body-sm">{email}</p>
        )}
      </div>
    </div>
  );
}

SearchedCollaborator.displayName = "SearchedCollaborator ";
