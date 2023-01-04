import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../Assets/logo.png';








const JoinRoom =()=>{ 
const navigate = useNavigate();
    const nameRef = useRef();
    const passwordRef = useRef();
const [authStatus, setAuthStatus] = useState(false);

    const joinRoom = ()=>{


        axios.post('/joinRoom', {name:nameRef.current.value, password:passwordRef.current.value}).then((response)=>{

setAuthStatus(!response.data);

window.localStorage.setItem('secretToken', response.data);
if(response.data){

   navigate('/start');
}

        }).catch(err=>{console.log(err.message)});


    }



return (<div className="w3-center">
<br />
<br /><br /><br />
<br />
<img
  style={{ width: "40%", margin: "auto" }}
  className="w3-round-xlarge w3-card-4 w3-animate-top"                             
  src={logo}
/>
<br />
<br />

<span
  style={{ fontFamily: "Irish Grover" }}
  className="w3-text-white w3-large w3-animate-left"
>
  Fill the credentials to join the room
</span>
<br />
<br />
<input ref={nameRef} className="formInput w3-center w3-animate-right" placeholder="room name"/>
<div className="formMessage">


</div>

<input type="password" ref={passwordRef} className="formInput w3-center w3-animate-left" placeholder="password"/>
<div className="formMessage">
{authStatus && <span className="w3-text-red ">wrong room name and password combination...</span>}

</div>


<br/><br/>

<div onClick={joinRoom} className="w3-button w3-large w3-green w3-animate-bottom w3-round-large createJoinButton">Join</div>
<br/><br/>
<Link to="/"><div  className="w3-button w3-animate-bottom w3-large w3-blue w3-round-large createJoinButton">Back</div></Link>
</div>);
}

export default JoinRoom;