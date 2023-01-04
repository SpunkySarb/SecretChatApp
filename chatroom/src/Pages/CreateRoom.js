import { Link, useNavigate } from "react-router-dom";
import logo from '../Assets/logo.png';
import axios from 'axios';
import { useRef, useState } from "react";







const CreateRoom =()=>{ 

    const [roomExists, setRoomExistence] = useState(false);
    const roomRef = useRef();
    const [passwordChars, updatePasswordChars] = useState(false);
    const [checkPassword, updatePasswordCheckStatus] = useState(false);
    const [charCount, updateCharCount] = useState(12);
    const passwordRef = useRef();
    const passwordRef2 = useRef();

    const navigate = useNavigate();

const checkRoom = ()=>{

    axios.post('/checkRoom', {roomName:roomRef.current.value}).then((response)=>{

setRoomExistence(response.data);


    }).catch(err=>{console.log(err.message)});


}

const confirmPassword = ()=>{


    updatePasswordCheckStatus(()=>{

if(passwordRef.current.value===passwordRef2.current.value){
    return(false);
}else{

    return true;
}



    });

}



const createRoom = ()=>{

if(roomRef.current.value.trim()!="" && passwordRef.current.value.length>=12 && passwordRef.current.value==passwordRef2.current.value){


    axios.post('/createRoom', {name:roomRef.current.value, password:passwordRef.current.value}).then((response)=>{

        setRoomExistence(response.data.authStatus);
        window.localStorage.setItem('secretToken', response.data.token);
        if(!response.data.authStatus){

            navigate('/start');
        }
        
            }).catch(err=>{console.log(err.message)});


}

   


}


return (<div className="w3-center">
<br />

<br /><br /><br />
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
  Fill the followings to create a room
</span>
<br />
<br />
<input onChange={checkRoom} ref={roomRef} className="formInput w3-center w3-animate-right" placeholder="room name"/>
<div className="formMessage">

{roomExists && <span className="w3-text-red ">room name already exists...</span> }
</div>

<input type="password" ref={passwordRef} onChange={()=>{if(passwordRef.current.value.length<12){


 updatePasswordChars(true); updateCharCount(12-passwordRef.current.value.length)} else{updatePasswordChars(false)}}} className="formInput w3-center w3-animate-left" placeholder="Password"/>
<div className="formMessage">
{passwordChars && <span className="w3-text-red ">{charCount} characters left...</span> }

</div>
<input type="password" ref={passwordRef2} onChange={confirmPassword} className="formInput w3-animate-right  w3-border-green w3-center" placeholder="confirm password"/>
<div className="formMessage">

{checkPassword && <span className="w3-text-red ">password does not match...</span>}
</div>

<br/><br/>

<div onClick={createRoom} className="w3-button w3-large w3-red w3-animate-bottom w3-round-large createJoinButton">Create</div>
<br/><br/>
<Link to="/"><div  className="w3-button w3-animate-bottom w3-large w3-blue w3-round-large createJoinButton">Back</div></Link>
</div>);
}

export default CreateRoom;