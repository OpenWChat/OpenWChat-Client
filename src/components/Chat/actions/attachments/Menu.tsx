import {
  CameraIcon,
  ContactIcon,
  DocumentIcon,
  PhotoIcon,
  PollIcon,
  StickerIcon,
} from "@/svg";

export const Menu = () => {
  return (
    <ul className="absolute bottom-14 openEmojiAnimation">
      <li>
        <button type="button" className="rounded-full">
          <PollIcon />
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full bg-[#0EABF4]">
          <ContactIcon />
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full bg-[#5F66CD]">
          <DocumentIcon />
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full bg-[#D3396D]">
          <CameraIcon />
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full">
          <StickerIcon />
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full bg-[#BF59CF]">
          <PhotoIcon />
        </button>
      </li>
    </ul>
  );
};
