/* eslint-disable @typescript-eslint/no-explicit-any */
import { addFiles } from "@/features";
import { PhotoIcon } from "@/svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export const PhotoAttachments = () => {
  const dispatch = useDispatch();
  const inputRef: any = useRef();

  const imageHandler = (e: any) => {
    let files = Array.from(e.target.files);
    files.forEach((img: any) => {
      if (
        img.type !== "image/png" &&
        img.type !== "image/jpeg" &&
        img.type !== "image/gif" &&
        img.type !== "image/webp" &&
        img.type !== "image/jfif"
      ) {
        files = files.filter((item: any) => item.name !== img.name);
        return;
      } else if (img.size > 1024 * 1024 * 10) {
        files = files.filter((item: any) => item.name !== img.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
          dispatch(
            addFiles({ file: img, imageData: e.target?.result, type: "image" })
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
