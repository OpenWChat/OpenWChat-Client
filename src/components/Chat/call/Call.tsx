/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ringing } from ".";
import { CallArea } from "./CallArea";
import { Header } from "./Header";

export const Call = ({ call, setCall, callAccepted }: any) => {
  const { callEnded, receivingCall } = call;

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden callbg`}
    >
      {/* Container */}
      <div>
        <div>
          {/* Header */}
          <Header />
          {/* Call area */}
          <CallArea name={"scascasc"} /> 
        </div>
      </div>
      {/* Ringing */}
      {receivingCall && !callAccepted && (
        <Ringing call={call} setCall={setCall} />
      )}
    </div>
  );
};
