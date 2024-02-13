/* eslint-disable @typescript-eslint/no-explicit-any */
import { open_create_conversation } from "@/features";
import { capitalize, dateHandler, getConversationId } from "@/utils";
import { useDispatch, useSelector } from "react-redux";

export const Conversation = ({ convo }: { convo: any }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const { activeConversation } = useSelector((state: any) => state.chat);
  const values = {
    receiver_id: getConversationId(user, convo.users),
    token: user.token,
  };
  const openConversation = () => {
    dispatch(open_create_conversation(values));
  };
  return (
    <li
      onClick={() => openConversation()} 
      className={`list-none h-[72px] w-full dark:bg-dark_bg_1 hover:${
        convo._id === activeConversation._id ? "" : "dark:bg-dark_bg_2"
      } cursor-pointer dark:text-dark_text_1 px-[10px] ${
        convo._id === activeConversation._id ? "dark:bg-dark_hover_1" : ""
      }`}
    >
      <div className="relative w-full flex items-center justify-between py-[10px]">
        {/* left side */}
        <div className="flex items-center gap-x-3">
          {/* conversation user picture */}
          <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src={convo.picture}
              alt={convo.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* conversation name and message */}
          <div className="w-full flex flex-col">
            {/* conversation name */}
            <h1 className="font-bold flex items-center gap-x-2">
              {capitalize(convo.name)}
            </h1>
            {/* conversation message */}
            <div>
              <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                  <p>
                    {convo?.latestMessage?.message.length > 26
                      ? `${convo?.latestMessage?.message.substring(0, 26)}...`
                      : convo?.latestMessage?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 items-end text-xs">
          <span className="dark:text-dark_text_2">
            {convo.latestMessage?.createdAt
              ? (dateHandler(convo?.latestMessage?.createdAt) as any)
              : ""}
          </span>
        </div>
      </div>
      {/* Border */}
      <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
    </li>
  );
};
