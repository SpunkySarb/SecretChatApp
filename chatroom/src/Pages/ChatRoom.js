import ChatBubble from "../Components/ChatBubble";
import Message from "../Components/Message";
import MessageSender from "../Components/MessageSender";
import { io } from "socket.io-client";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const ChatRoom = () => {
  const socket = io( {
    auth: { token: window.localStorage.getItem("secretToken") },
  });

  socket.on("connect", () => {
    // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  socket.emit("joined", {
    name: window.localStorage.getItem("SecretChatName"),
  });

  window.scrollTo(0, document.body.scrollHeight * 2);

  const [messages, updateMessages] = useState([
   
  ]);

  const messageInput = document.getElementById("messageInput");

  useEffect(() => {
    axios
      .post("/getMessages", {
        token: window.localStorage.getItem("secretToken"),
      })
      .then((response) => {
        updateMessages(response.data);
        window.scrollTo(0, document.body.scrollHeight * 2);
        
      })
      .catch((err) => {
        console.log(err.message);
      });

    socket.off("receieve").on("receieve", (data) => {
      //console.log(data);

      updateMessages((prev) => {
        return [...prev, data];
      });
    });

    window.scrollTo(0, document.body.scrollHeight * 2);
    return () => {
      socket.off("receieve");
    };
  }, []);

  const send = () => {

    if(messageInput.value.trim()!=""){

      axios
      .post("/saveMessage", {
        token: window.localStorage.getItem("secretToken"),
        message: messageInput.value,
        username: window.localStorage.getItem("SecretChatName"),
        avatar:window.localStorage.getItem('SecretChatAvatar')
      })
      .then(() => {
        

      
      })
      .catch((err) => {
        console.log(err.message);
      });

    socket.emit("sendMsg", {
      message: messageInput.value,
      username:window.localStorage.getItem('SecretChatName'),
      token: window.localStorage.getItem("secretToken"),
      avatar:window.localStorage.getItem('SecretChatAvatar')
    });

    messageInput.value="";

    }
   
  };

  return (
    <div>
      <Message messages={messages} />

      
      <div style={{ height: "200px" }}></div>

      <MessageSender send={send} />
    </div>
  );
};

export default ChatRoom;
