/* eslint-disable @typescript-eslint/no-explicit-any */
import { PhotoIcon } from "@/svg";
import { useRef } from "react";

export const PhotoAttachments = () => {
  const inputRef: any = useRef();
  return (
    <li>
      <button
        onClick={() => inputRef.current.click}
        type="button"
        className="rounded-full bg-[#BF59CF]"
      >
        <PhotoIcon />
      </button>
      <input
        type="file"
        hidden
        ref={inputRef}
        accept="image/png,image/jpeg,image/gif,image/webp"
        onChange={imageHandler}
      />
    </li>
  );
};
