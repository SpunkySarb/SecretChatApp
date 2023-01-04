import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import flash from '../Avatars/flash.png';
import girl from '../Avatars/girl.png';
import among from '../Avatars/among.png';
import lady from '../Avatars/lady.png';




const StartPage =()=>{ 


const [avatar, updateAvatar] = useState(flash);

const nameRef = useRef();
const pinRef = useRef();
const pinRef2 = useRef();
const navigate = useNavigate();


const [checkPIN, updatePINStatus] = useState(false);

useEffect(()=>{


    if(window.localStorage.getItem('SecretChatAvatar')==null || window.localStorage.getItem('SecretChatAvatar')=="" ){

        window.localStorage.setItem('SecretChatAvatar','flash');
    }






},[]);


const changeAvatar = (name)=>{

localStorage.setItem('SecretChatAvatar', name);

}



const saveName = ()=>{

if(!(nameRef.current.value.trim()=="") && !checkPIN){

    localStorage.setItem('SecretChatName', nameRef.current.value);
    localStorage.setItem('SecretPIN', pinRef.current.value);
navigate('/chatroom');

}



}




return (<div className="w3-container w3-center">
<br/><br/><br/>
<img style={{width:'50%'}} src={avatar}/>
<br/><br/>
<span style={{fontFamily:'Irish Grover'}} className="w3-text-white w3-large">choose your avatar</span><br/><br/>
<div className='w3-bar'>

<img style={{width:'60px'}} onClick={()=>{updateAvatar(flash); changeAvatar('flash');}} className='w3-bar-item w3-hover-cyan w3-badge' src={flash}/>
<img style={{width:'60px'}} onClick={()=>{updateAvatar(girl); changeAvatar('girl');}} className='w3-bar-item w3-hover-cyan w3-badge' src={girl}/>
<img style={{width:'60px'}} onClick={()=>{updateAvatar(among); changeAvatar('among');}} className='w3-bar-item w3-hover-cyan w3-badge ' src={among}/>
<img style={{width:'60px'}} onClick={()=>{updateAvatar(lady); changeAvatar('lady');}} className='w3-bar-item w3-hover-cyan w3-badge' src={lady}/>


</div>
<br/><br/>
<input ref={nameRef} value={window.localStorage.getItem('SecretChatName')}  className="formInput w3-center w3-animate-right" placeholder="Enter your name"/>
<br/><br/>

<span style={{fontFamily:'Irish Grover'}} className="w3-text-white w3-large">choose a PIN for easy login</span><br/><br/>

<input ref={pinRef} style={{width:'40%', height:'45px'}} type="password" className="formInput w3-center w3-animate-right" inputMode='numeric' placeholder="enter PIN"/><br/>
<input ref={pinRef2} onChange={()=>{if(pinRef.current.value===pinRef2.current.value){updatePINStatus(false);} else{
    updatePINStatus(true);
}}}  style={{width:'40%', marginTop:'10px', height:'45px'}} type="password" className="formInput w3-center w3-animate-right" inputMode='numeric' placeholder="confirm PIN"/>
<div className="formMessage">

{checkPIN && <span className="w3-text-red ">PIN does not match...</span> }
</div>
<div onClick={saveName} className="w3-button w3-large w3-cyan w3-animate-bottom w3-round-large createJoinButton">Start</div><br/><br/>
<Link to="/"><div  className="w3-button w3-large w3-red w3-animate-bottom w3-round-large createJoinButton">logout</div></Link>
</div>);
}

export default StartPage;