import { SearchIcon } from "@/assets/feather-icons/SearchIcon";
import { Avatar } from "@/components/Avatar/Avatar";

export function SelectedUser({
  avatar,
  name,
  onClick,
  email,
  disabled,
  position,
}: {
  avatar?: string;
  email: string;
  name: string;
  id: string;
  onClick: () => void;
  disabled?: boolean;
  position?: string;
}) {
  const Tag = disabled ? "div" : "button";

  return (
    <Tag
      type="button"
      className="button-empty !px-5 !py-4 flex items-center justify-between w-full border border-gray-shade11 rounded-[0.625rem]"
      onClick={disabled ? undefined : onClick}
    >
      <div className={`flex items-center justify-start gap-x-[0.62rem]`}>
        <Avatar
          src={avatar}
          name={name}
          className="w-[1.6875rem] h-[1.6875rem] rounded-full"
        />
        <div className="stack items-start">
          <p className="text-text-dark font-medium">{name}</p>
          {email && <p className="text-body-sm">{email}</p>}
          {position && <p className="text-body-sm">{position}</p>}
        </div>
      </div>
      {!disabled && SearchIcon}
    </Tag>
  );
}
