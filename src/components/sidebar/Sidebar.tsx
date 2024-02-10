import { useState } from "react";
import { SideBarHeader } from "./header";
import { Notifications } from "./notifications";
import { Search } from "./search";

export const Sidebar = () => {
  const [searchResults, setSearchResulets] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
      {/* Sidebar Header */}
      <SideBarHeader />
      {/* Notifications */}
      <Notifications />
      {/* Search */}
      <Search searchLength={searchResults.length} />
    </div>
  );
};
