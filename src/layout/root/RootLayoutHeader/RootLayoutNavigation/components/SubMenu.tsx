import { SubMenuList } from "./SubMenusList";
import { DashboardCloseMenuIcon } from "@/assets/feather-icons/DashboardCloseMenuIcon";
import { DashboardOpenMenuIcon } from "@/assets/feather-icons/DashboardOpenMenuIcon";
import { useOpen } from "@/utilities/hooks/useOpen";

export function SubMenu() {
  const { isOpen, onClose: close, toggleOpen } = useOpen();

  return (
    <div className="relative flex flex-wrap content-center ml-[1rem]">
      <div
        className="
        h-[2.8rem] w-[2.8rem] rounded-[.8rem] border border-transparent-primary
        grid justify-center content-center cursor-pointer transition-all duration-75
        hover:bg-transparent-primary
    "
        onClick={toggleOpen}
      >
        {isOpen ? <DashboardCloseMenuIcon /> : <DashboardOpenMenuIcon />}
      </div>
      {isOpen && <SubMenuList close={close} />}
    </div>
  );
}
