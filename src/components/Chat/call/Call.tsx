/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ringing } from ".";

export const Call = ({ call, setCall, callAccepted }: any) => {
  const { callEnded, receivingCall } = call;

  return (
    <div>
      {receivingCall && !callAccepted && (
        <Ringing call={call} setCall={setCall} />
      )}
    </div>
  );
};
