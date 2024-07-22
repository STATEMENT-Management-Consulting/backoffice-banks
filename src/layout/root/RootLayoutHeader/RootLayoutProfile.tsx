import { Avatar } from "@/components/Avatar/Avatar";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { MenuOptions } from "./MenuOptions/MenuOptions";
import { useApiGetUser } from "@/utilities/api/user/useApiGetUser";

export function RootLayoutProfile() {
  const { user } = useApiGetUser();

  return (
    <div className="relative flex items-center gap-x-[24px] justify-end">
      {/* <LinkWithIconBtn Icon={FiShoppingCart} route={"/store"} /> */}
      {/* <NotificationsDropdown /> */}
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
