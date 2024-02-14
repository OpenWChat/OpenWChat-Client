/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChatContainer, Sidebar } from "@/components";
import { WhatsAppHome } from "@/components";
import SocketContext from "@/context/SocketContext";
import { getConversations, updateMessagesAndConversations } from "@/features";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ socket }: any) => {
  const dispatch: any = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const { activeConversation } = useSelector((state: any) => state.chat);
  // join user into socket io
  useEffect(() => {
    socket.emit("join", user._id);
  }, [user]);
  // get conversation
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user]);

  // listening to recieved message
  useEffect(() => {
    socket.on("message received", (message: any) => {
      dispatch(updateMessagesAndConversations(message));
    });
  }, []);

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="container h-screen flex py-[19px]">
        {/* Sidebar */}
        <Sidebar />
        {activeConversation._id ? <ChatContainer /> : <WhatsAppHome />}
      </div>
    </div>
  );
};

const HomeWhitSocket = (props: any) => (
  <SocketContext.Consumer>
    {(socket) => <Home {...props} socket={socket} />}
  </SocketContext.Consumer>
);
export default HomeWhitSocket;
