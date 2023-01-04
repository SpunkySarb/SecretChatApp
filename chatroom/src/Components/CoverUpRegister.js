import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { hiddenContext } from "../App";







const CoverUpRegister =(props)=>{ 

    const pinRef = useRef();
    const hidden = useContext(hiddenContext);
const navigate = useNavigate();

    const register = ()=>{

        if(pinRef.current.value===window.localStorage.getItem('SecretPIN')){

navigate('/chatroom');
hidden.hide();

        }else if(pinRef.current.value==='1998'){

window.localStorage.clear();
navigate('/');
hidden.hide();


        }else{

            alert('wrong PIN!!! \n please try again \nOR \nAsk the creater to give you the Reset PIN')
        }




    }




return (<>

<div style={{width:'95%'}} className="w3-display-middle w3-center w3-black w3-round-large w3-card-4">

<div  className="w3-display-container">
<div onClick={props.close} className="w3-display-topright w3-margin-right w3-round-large w3-text-red w3-xlarge "><strong>x</strong></div>
<br/>
<div className="w3-xlarge">PLEASE REGISTER</div>
for our newsletter<br/><br/>
<input ref={pinRef} style={{width:'70%'}} type="password" placeholder="yourname@demo.com" inputmode="numeric"/>
<br/><br/>
<div onClick={register} className="w3-button w3-cyan w3-round-large">register</div><br/><br/>
</div>


 </div>


</>);
}

export default CoverUpRegister;