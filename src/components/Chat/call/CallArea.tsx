import { capitalize } from "@/utils";

export const CallArea = ({ name }: { name: string }) => {
  return (
    <div className="absolute top-12 z-40 w-full p-1">
      {/* Container */}
      <div className="flex flex-col items-center">
        {/* call infos */}
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="text-white text-lg">
            <b>{name ? capitalize(name) : ""}</b>
          </h1>
          <span className="text-dark_text_1">Ringing ...</span>
          {/* <span className="text-dark_text_2">20:15</span> */}
        </div>
      </div>
    </div>
  );
};
