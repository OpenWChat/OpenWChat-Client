/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Call, ChatContainer, Sidebar } from "@/components";
import { WhatsAppHome } from "@/components";
import SocketContext from "@/context/SocketContext";
import { getConversations, updateMessagesAndConversations } from "@/features";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const callData = {
  receivingCall: true,
  callEnded: false,
};
const Home = ({ socket }: any) => {
  const dispatch: any = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const { activeConversation } = useSelector((state: any) => state.chat);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [call, setCall] = useState(callData);
  const [callAccepted, setCallAccepted] = useState(false);
  const { callEnded, receivingCall } = call;
  const [typing, setTyping] = useState(false);
  // join user into socket io
  useEffect(() => {
    socket.emit("join", user._id);
    // get online users
    socket.on("get-online-users", (users: any) => {
      setOnlineUsers(users);
    });
  }, [user]);
  // get conversation
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user]);

  useEffect(() => {
    // listening to recieved message
    socket.on("message received", (message: any) => {
      dispatch(updateMessagesAndConversations(message));
    });
    // listening when user is typing
    socket.on("typing", (conversationId: any) => setTyping(conversationId));
    socket.on("stop typing", () => setTyping(false));
  }, []);

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="container h-screen flex py-[19px]">
        {/* Sidebar */}
        <Sidebar onlineUsers={onlineUsers} typing={typing} />
        {activeConversation._id ? (
          <ChatContainer onlineUsers={onlineUsers} typing={typing} />
        ) : (
          <WhatsAppHome />
        )}
      </div>
      <Call call={call} setCall={setCall} callAccepted={callAccepted} />
    </div>
  );
};

const HomeWhitSocket = (props: any) => (
  <SocketContext.Consumer>
    {(socket) => <Home {...props} socket={socket} />}
  </SocketContext.Consumer>
);
export default HomeWhitSocket;
