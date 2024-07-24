import { DotsVerticalIcon } from "@/assets/feather-icons/DotsVerticalIcon";
import { Avatar } from "@/components/Avatar/Avatar";
import { Dropdown } from "@/components/Dropdown/Dropdown";

type ManagerItemProps = {
  name: string;
  email: string;
  role: string;
  avatar?: string;
  disabled?: boolean;
};

export function ManagerItem({ name, email, role, avatar, disabled }: ManagerItemProps) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Avatar src={avatar} name={name} className="w-14 h-14 rounded-full" />

        <div className="stack">
          <h6 className="text-body-md">{name}</h6>
          <span className="text-body-sm text-gray-shade8">{email}</span>
        </div>
      </div>

      <div className="flex items-center gap-x-10">
        <span className="text-body-md font-medium">{role}</span>
        <button className="button-empty rotate-90">{DotsVerticalIcon}</button>
      </div>
    </div>
  );
}
