import { FileViewer } from "./FileViewer";
import { HandleAndSend } from "./HandleAndSend";
import { Header } from "./Header";
import { Input } from "./Input";

export const FilePreview = () => {
  return (
    <div className="relative py-2 w-full flex items-center justify-center">
      {/* Container */}
      <div className="flex w-full flex-col items-center">
        {/* Header */}
        <Header />
        {/* Viewing Selected Files */}
        <FileViewer />
        <div className="flex w-full flex-col items-center">
          {/* Message input */}
          <Input />
          {/* Send and manipulate files */}
          <HandleAndSend/>
        </div>
      </div>
    </div>
  );
};
