import { useState } from "react";
import { SideBarHeader } from "./header";
import { Notifications } from "./notifications";
import { Search } from "./search";
import { Conversations } from "./conversations";

export const Sidebar = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="w-[40%] h-full select-none">
      {/* Sidebar Header */}
      <SideBarHeader />
      {/* Notifications */}
      <Notifications />
      {/* Search */}
      <Search
        searchLength={searchResults.length}
        setSearchResults={setSearchResults}
      />
      {/* Conversations */}
      <Conversations />
    </div>
  );
};
