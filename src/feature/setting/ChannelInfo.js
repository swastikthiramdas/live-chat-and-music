import React from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import Button from "components/Button";

const ChannelInfo = () => {
  const { userId } = useAuth();
  const { channels, selectedChannel, leaveChannel } = useChannel();
  const { setRightSidebar } = useRightSidebar();
  const channel = channels[selectedChannel];

  const deleteButton = (
    <Button type="danger" className="w-full">
      Delete Channel
    </Button>
  );
  const leaveButton = (
    <Button
      type="danger"
      onClick={() => leaveChannel(userId)}
      className="w-full"
    >
      Leave Channel
    </Button>
  );

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Info</h2>
        <i
          onClick={() => setRightSidebar("")}
          className="fa-solid fa-xmark text-3xl cursor-pointer"
        ></i>
      </div>
      <div className="mt-3.5">
        <p className="text-xl my-3">{channel.name}</p>
        {channel.roles[userId] === "creator"
          ? null /* deleteButton */
          : leaveButton}
      </div>
    </div>
  );
};

export default ChannelInfo;
