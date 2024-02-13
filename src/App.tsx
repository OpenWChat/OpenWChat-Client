/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider } from "react-router-dom";
import { mainRouter, userRouter } from "./routes";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
const SOCKET_ENDPOINT = import.meta.env.VITE_API_SOCKET;
const socket = io(SOCKET_ENDPOINT);
const App = () => {
  const { user } = useSelector((state: any) => state.user);
  const { token } = user;

  return (
    <div className="dark">
      {token ? (
        <RouterProvider router={userRouter} />
      ) : (
        <RouterProvider router={mainRouter} />
      )}
    </div>
  );
};

export default App;
