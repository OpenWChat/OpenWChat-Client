import { ReturnIcon, SearchIcon } from "@/svg";
import { useState } from "react";

export const Search = ({ searchLength }: { searchLength: any }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-[49px] py-1.5">
      {/* Container */}
      <div className="px-[10px]">
        {/* Search Input Container */}
        <div className="flex items-center gap-x-2">
          <div className="w-full dark:bg-dark_bg_2 rounded-lg pl-2">
            {show || searchLength > 0 ? (
              <span className="w-8 flex items-center justify-center rotateAnimation">
                <ReturnIcon className="fill-green_1 w-5" />
              </span>
            ) : (
              <span className="w-8 flex items-center justify-center">
                <SearchIcon className="dark:fill-dark_svg_2 w-5" />
              </span>
            )}
            <input
              type="text"
              placeholder="Search or start a new chat"
              className="input"
              onFocus={() => setShow(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
