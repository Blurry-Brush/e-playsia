import React from "react"
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import "./chat-layout.css";
import 'stream-chat-react/dist/css/v2/index.css';

const chatClient = new StreamChat('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicm91Z2gtcGluZS03IiwiZXhwIjoxNjgyMzk4NjY1fQ.v5wVrsYobiOA6WiHzAGoaFMz1WmqMCiTaiV2cFkIhjQ';

chatClient.connectUser(
    {
        id: 'rough-pine-7',
        name: 'rough',
        image: 'https://getstream.io/random_png/?id=rough-pine-7&name=rough',
    },
    userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
    // add as many custom fields as you'd like
    image: 'https://www.drupal.org/files/project-images/react.png',
    name: 'Talk about React',
    members: ['rough-pine-7'],
});

const ChatApp = () => {
    <Chat client={chatClient} theme='str-chat__theme-light'>
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
}

export default ChatApp;