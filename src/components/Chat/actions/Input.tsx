/* eslint-disable @typescript-eslint/no-explicit-any */

export const Input = ({
  message,
  setMessage,
}: {
  message: string;
  setMessage: any;
}) => {
  const onChangeHandler = (e: any) => {
    setMessage(e.target.value);
  };
  return (
    <div className="w-full">
      <input
        type="text"
        className="dark:bg-dark_hover_1 dark:text-dark_text_1 outline-none h-[45px] w-full flex-1 rounded-lg pl-4"
        placeholder="Type a message"
        value={message}
        onChange={onChangeHandler}
      />
    </div>
  );
};
