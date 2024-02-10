/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider } from "react-router-dom";
import { mainRouter, userRouter } from "./routes";
import { useSelector } from "react-redux";

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
