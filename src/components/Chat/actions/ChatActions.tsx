/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendIcon } from "@/svg";
import { Attachments } from "./Attachments";
import { EmojiPicker } from "./EmojiPicker";
import { Input } from "./Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "@/features";
import { ClipLoader } from "react-spinners";

export const ChatActions = () => {
  const dispatch = useDispatch();
  const { activeConversation, status } = useSelector(
    (state: any) => state.chat
  );
  const { user } = useSelector((state: any) => state.user);
  const [message, setMessage] = useState("");
  const values = {
    message,
    convo_id: activeConversation._id,
    files: [],
    token: user.token,
  };
  const sendMessageHandler = async (e: any) => {
    e.preventDefault();
    await dispatch(sendMessage(values));
    setMessage("");
  };
  return (
    <form
      onSubmit={sendMessageHandler}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/* Container */}
      <div className="w-full flex items-center gap-x-2 ">
        {/* Emojis and attachments */}
        <ul className="flex gap-x-2">
          <EmojiPicker />
          <Attachments />
        </ul>
        {/* Input */}
        <Input message={message} setMessage={setMessage} />
        {/* Send Button */}
        <button type="submit" className="btn">
          {status === "loading" ? (
            <ClipLoader color="#E9EDEF" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  );
};
