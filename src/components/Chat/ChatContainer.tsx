/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { ChatHeader } from "./header";
import { ChatMessages } from "./messages";
import { useEffect } from "react";
import { getConversationMessages } from "@/features";
import { ChatActions } from "./actions";
import { checkOnlineStatus } from "@/utils";

export const ChatContainer = ({
  onlineUsers,
  typing,
}: {
  onlineUsers: any;
  typing: any;
}) => {
  const dispatch = useDispatch();
  const { activeConversation, files } = useSelector((state: any) => state.chat);
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
        <ChatHeader
          online={checkOnlineStatus(
            onlineUsers,
            user,
            activeConversation.users
          )}
        />
        {files.length > 0 ? (
          "files"
        ) : (
          <>
            {/* Chat Messages */}
            <ChatMessages typing={typing} />
            {/* Chat Action */}
            <ChatActions />
          </>
        )}
      </div>
    </div>
  );
};
