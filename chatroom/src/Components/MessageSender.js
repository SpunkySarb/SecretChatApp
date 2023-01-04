import { useContext } from "react";
import { hiddenContext } from "../App";








const MessageSender =(props)=>{ 

const hidden = useContext(hiddenContext);




return (<>

<div style={{position:'fixed', width:window.innerWidth}} className="w3-center  w3-display-bottommiddle">
<div onClick={hidden.show} style={{fontFamily:'Irish Grover', boxShadow:'0px 0px 4px 1px #64D9F2'}} className="w3-button w3-large w3-cyan w3-badge w3-margin-bottom">hide</div><br/>
<div  className="w3-black"><input id="messageInput" className="formInput w3-center w3-animate-right" placeholder="Start Typing..."/>

<span onClick={props.send} style={{fontFamily:'Irish Grover'}} className="w3-button  w3-cyan w3-margin-left w3-round-large">Send</span>
<br/><br/><br/>
</div>

</div>


</>);
}

export default MessageSender;