import { SideBarHeader } from "./header";
import { Notifications } from "./notifications";

export const Sidebar = () => {
  return (
    <div className="w-[40%] h-full select-none">
      {/* Sidebar Header */}
      <SideBarHeader />
      {/* Notifications */}
      <Notifications />
    </div>
  );
};
