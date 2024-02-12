/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { ChatHeader } from "./header";
import { ChatMessages } from "./messages";
import { useEffect } from "react";
import { getConversationMessages } from "@/features";
import { ChatActions } from "./actions";

export const ChatContainer = () => {
  const dispatch = useDispatch();
  const { activeConversation } = useSelector((state: any) => state.chat);
  const { user } = useSelector((state: any) => state.user);
  const values = {
    token: user.token,
    convo_id: activeConversation?._id,
  };
  useEffect(() => {
    if (activeConversation._id) {
      dispatch(getConversationMessages(values));
    }
  }, [activeConversation]);
  return (
    <div className="relative w-full border-l dark:border-l-dark_border_2 select-none overflow-hidden ">
      {/* Container */}
      <div>
        {/* ChatHeader */}
        <ChatHeader />
        {/* Chat Messages */}
        <ChatMessages />
        {/* Chat Action */}
        <ChatActions />
      </div>
    </div>
  );
};
