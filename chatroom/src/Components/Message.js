import { useState } from "react";
import Received from "./SubComponents/Received";
import Sent from "./SubComponents/Sent";
import React from 'react';






const Message =(props)=>{ 


const messages = props.messages;



return (<>

{messages.map((i, index)=>{

if(i.username==window.localStorage.getItem('SecretChatName')){
   return <Sent key={index} message={i.message} avatar={i.avatar}/>
}else{
    return <Received key={index} avatar={i.avatar} message={i.message}/>
}


})}


</>);
}

export default React.memo(Message);