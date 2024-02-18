/* eslint-disable @typescript-eslint/no-explicit-any */
import { addFiles } from "@/features";
import { DocumentIcon } from "@/svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export const DocumentAttachments = () => {
  const dispatch = useDispatch();
  const inputRef: any = useRef();

  const documentHandler = (e: any) => {
    let files = Array.from(e.target.files);
    files.forEach((file: any) => {
      if (
        file.type !== "application/pdf" &&
        file.type !== "text/plain" &&
        file.type !== "application/msword" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
        file.type !== "image/jfif" &&
        file.type !== "video/mp4" &&
        file.type !== "video/mpeg" &&
        file.type !== "video/webm"
      ) {
        files = files.filter((item: any) => item.name !== file.name);
        return;
      } else if (file.size > 1024 * 1024 * 10) {
        files = files.filter((item: any) => item.name !== file.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          dispatch(
            addFiles({
              file: file,
              type: file.type.split("/")[1],
            })
          );
        };
      }
    });
  };
  return (
    <li>
      <button
        onClick={() => inputRef.current.click()}
        type="button"
        className="rounded-full bg-[#BF59CF]"
      >
        <DocumentIcon />
      </button>
      <input
        type="file"
        hidden
        ref={inputRef}
        accept="image/png,image/jpeg,image/gif,image/webp,video/mp4,video/mpeg,video/webm"
        onChange={documentHandler}
      />
    </li>
  );
};
