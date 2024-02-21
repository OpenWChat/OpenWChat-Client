/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Ringing } from ".";
import { CallActions } from "./CallActions";
import { CallArea } from "./CallArea";
import { Header } from "./Header";

export const Call = ({
  call,
  setCall,
  callAccepted,
  userVideo,
  myVideo,
}: any) => {
  const { callEnded, receivingCall } = call;
  const [showActions, setShowActions] = useState(false);
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden callbg`}
      onMouseOver={() => setShowActions(true)}
      onMouseOut={() => setShowActions(false)}
    >
      {/* Container */}
      <div>
        <div>
          {/* Header */}
          <Header />
          {/* Call area */}
          <CallArea name={"scascasc"} />
          {/* Call actions */}
          {showActions && <CallActions />}
        </div>
        {/* Video streams */}
        <div>
          {/* user video */}
          <div></div>
          {/* my video */}
          <div></div>
        </div>
      </div>
      {/* Ringing */}
      {receivingCall && !callAccepted && (
        <Ringing call={call} setCall={setCall} />
      )}
    </div>
  );
};
