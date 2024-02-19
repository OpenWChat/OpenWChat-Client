/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Add } from "./Add";
import { SendIcon } from "@/svg";
import { uploadFiles } from "@/utils";

export const HandleAndSend = ({
  activeIndex,
  setActiveIndex,
  message,
}: {
  activeIndex: number;
  setActiveIndex: any;
  message: string;
}) => {
  const { files } = useSelector((state: any) => state.chat);
  const sendMessageHandler = async (e: any) => {
    e.preventDefault();
    // upload files
    const uploaded_files = await uploadFiles(files);
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
        <SendIcon className="fill-white" />
      </div>
    </div>
  );
};
