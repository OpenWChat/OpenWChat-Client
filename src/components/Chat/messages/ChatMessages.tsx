/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Message } from "./Message";

export const ChatMessages = () => {
  const { messages } = useSelector((state: any) => state.chat);
  const { user } = useSelector((state: any) => state.user);

  return (
    <div className="mb-[60px] bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')] bg-cover bg-no-repeat">
      {/* Container */}
      <div className="scrollbar overflow-auto overflow_scrollbar py-2 px-[5%]">
        {/* Messages */}
        {messages &&
          messages.map((message: any) => (
            <Message
              message={message}
              key={message._id}
              me={user._id === message.sender._id}
            />
          ))}
      </div>
    </div>
  );
};