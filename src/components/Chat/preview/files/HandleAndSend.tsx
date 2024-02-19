/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Add } from "./Add";

export const HandleAndSend = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: any;
}) => {
  const { files } = useSelector((state: any) => state.chat);
  return (
    <div className="w-[97%] flex items-center justify-between mt-2 pt-2 border-t dark:border-dark_border_2">
      {/* Empty */}
      <span>
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
      </span>
    </div>
  );
};
