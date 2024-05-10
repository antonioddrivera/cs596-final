// Channels.js
import React from 'react';
import './styles.css'
const Channels = ({ account, channels, currentChannel, setCurrentChannel }) => {
  const channelHandler = async (channel) => {
    setCurrentChannel(channel);
  };

  return (
    <div className="channels">
      <div className="channels__text">
        <h2>Hub</h2>
        <ul>
          {channels.map((channel, index) => (
            <li
              onClick={() => channelHandler(channel)}
              key={index}
              className={currentChannel && currentChannel.id.toString() === channel.id.toString() ? "active" : ""}
            >
              {channel.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Channels;