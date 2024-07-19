import { ChevronDownIcon } from "@/assets/feather-icons/ChevronDownIcon";
import { Avatar } from "@/components/Avatar/Avatar";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { useApiGetUser } from "@/views/auth/AuthVerify/api/useApiGetUser";
import { NotificationsDropdown } from "@/views/notifications/NotificationsDropdown/NotificationsDropdownIcon";
import { MenuOptions } from "./MenuOptions/MenuOptions";

export function RootLayoutProfile() {
  const { user } = useApiGetUser();

  return (
    <div className="relative flex items-center gap-x-[24px] justify-end">
      {/* <LinkWithIconBtn Icon={FiShoppingCart} route={"/store"} /> */}
      <NotificationsDropdown />
      <Dropdown
        trigger={
          <Avatar
            name={user?.name}
            src={user?.avatar}
            className="w-[2rem] h-[2rem] rounded-full"
          />
        }
      >
        <MenuOptions />
      </Dropdown>
    </div>
  );
}
