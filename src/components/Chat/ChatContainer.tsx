/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { ChatHeader } from "./header";

export const ChatContainer = () => {
  return (
    <div className="relative w-full border-l dark:border-l-dark_border_2 select-none overflow-hidden ">
      {/* Container */}
      <div>
        {/* ChatHeader */}
        <ChatHeader />
      </div>
    </div>
  );
};
