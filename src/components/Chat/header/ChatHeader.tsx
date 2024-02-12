/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

export const ChatHeader = () => {
  const { activeConversation } = useSelector((state: any) => state.chat);
  const { name, picture } = activeConversation;
  return (
    <div className="h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none">
      {/* Container */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          {/* Conversation image */}
          <button className="btn">
            <img
              src={picture}
              alt={`${name} picture`}
              className="w-full h-full rounded-full object-cover"
            />
          </button>
          {/* Conversation Name and online status */}
          <div className="flex flex-col">
            <h1 className="dark:text-white text-md font-bold">
              {name.split(" ")[0]}
            </h1>
            <span className="text-xs dark:text-dark_svg_2">online</span>
          </div>
        </div>
      </div>
    </div>
  );
};
