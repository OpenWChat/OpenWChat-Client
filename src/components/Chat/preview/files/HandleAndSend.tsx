/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Add } from "./Add";
import { SendIcon } from "@/svg";
import { uploadFiles } from "@/utils";
import { useState } from "react";
import { clearFiles, sendMessage } from "@/features";
import SocketContext from "@/context/SocketContext";
import { ClipLoader } from "react-spinners";

export const HandleAndSendWithoutSocket = ({
  activeIndex,
  setActiveIndex,
  message,
  socket,
}: {
  activeIndex: number;
  setActiveIndex: any;
  message: string;
  socket: any;
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { files, activeConversation } = useSelector((state: any) => state.chat);
  const { user } = useSelector((state: any) => state.user);
  const { token } = user;
  const sendMessageHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // upload files
    const uploaded_files = await uploadFiles(files);
    // send the message
    const values = {
      token,
      message,
      convo_id: activeConversation._id,
      files: uploaded_files.length > 0 ? uploaded_files : [],
    };

    const newMsg = await dispatch(sendMessage(values));
    socket.emit("send message", newMsg.payload);
    setLoading(false);
    dispatch(clearFiles());
  };
  return (
    <div className="w-[97%] flex items-center justify-between mt-2 pt-2 border-t dark:border-dark_border_2">
      {/* Empty */}
      <span></span>
      {/* List files */}
      <div className="flex gap-x-2">
        {files.map((file: any, i: number) => (
          <div
            key={i}
            className={`w-14 h-14 border dark:border-white rounded-md overflow-hidden cursor-pointer ${
              activeIndex === i ? "border-[3px] !border-green_1" : ""
            }`}
            onClick={() => setActiveIndex(i)}
          >
            {file.type === "IMAGE" ? (
              <img
                src={file.fileData}
                alt="image"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={`/images/file/${file?.type}.png`}
                alt={file[0]?.type}
                className="w-8 h-10 mt-1.5 ml-2.5"
              />
            )}
          </div>
        ))}
        {/* Add anither file */}
        <Add setActiveIndex={setActiveIndex} />
      </div>
      {/* Send Button */}
      <div
        className="bg-green_1 w-16 h-16 mt-2 rounded-full flex items-center justify-center cursor-pointer"
        onClick={(e) => sendMessageHandler(e)}
      >
        {loading ? (
          <ClipLoader color="#E9EDEF" size={25} />
        ) : (
          <SendIcon className="fill-white" />
        )}
      </div>
    </div>
  );
};

const HandleAndSendWithtSocket = (props: any) => (
  <SocketContext.Consumer>
    {(socket) => <HandleAndSendWithoutSocket {...props} socket={socket} />}
  </SocketContext.Consumer>
);
export const HandleAndSend = HandleAndSendWithtSocket;
