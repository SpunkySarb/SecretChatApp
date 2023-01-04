import CoverUpRegister from "./CoverUpRegister";
import {useState} from 'react';



const CoverUp =()=>{ 


const [registerStatus, setRegisterStatus] = useState(false);



return (<>

<iframe style={{width:window.innerWidth, height:window.innerHeight}} src="https://healthline.com" title="description"></iframe> 



 <div onClick={()=>{setRegisterStatus(true)}} style={{marginBottom:'15px', marginRight:'15px'}} className="w3-button w3-display-bottomright w3-black w3-round-large">EXIT</div>

{registerStatus && <CoverUpRegister close={()=>{setRegisterStatus(false)}}/> }


</>);
}

export default CoverUp;