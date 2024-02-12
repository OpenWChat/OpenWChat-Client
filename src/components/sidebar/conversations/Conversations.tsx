/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Conversation } from "./Conversation";

export const Conversations = () => {
  const { conversations } = useSelector((state: any) => state.chat);

  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations.map((convo: any) => (
            <Conversation convo={convo} key={convo._id} />
          ))}
      </ul>
    </div>
  );
};