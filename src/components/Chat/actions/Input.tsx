/* eslint-disable @typescript-eslint/no-explicit-any */

import SocketContext from "@/context/SocketContext";
import { useState } from "react";

export const InputWithouttSocket = ({
  message,
  setMessage,
  textRef,
}: {
  message: string;
  setMessage: any;
  textRef: any;
}) => {
  const [typing, setTyping] = useState(false);
  const onChangeHandler = (e: any) => {
    setMessage(e.target.value);
  };
  return (
    <div className="w-full">
      <input
        type="text"
        className="dark:bg-dark_hover_1 dark:text-dark_text_1 outline-none h-[45px] w-full flex-1 rounded-lg pl-4"
        placeholder="Type a message"
        value={message}
        onChange={onChangeHandler}
        ref={textRef}
      />
    </div>
  );
};

const InputWithtSocket = (props: any) => (
  <SocketContext.Consumer>
    {(socket) => <InputWithouttSocket {...props} socket={socket} />}
  </SocketContext.Consumer>
);
export const Input = InputWithtSocket;
