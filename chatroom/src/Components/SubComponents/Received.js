



import flash from '../../Avatars/flash.png';
import girl from '../../Avatars/girl.png';
import lady from '../../Avatars/lady.png';
import among from '../../Avatars/among.png';
import { useEffect, useState } from 'react';




const Received =(props)=>{ 


    
const [image, updateImage]  = useState(flash);

useEffect(()=>{

if(props.avatar=='flash'){
    updateImage(flash);
}else if(props.avatar=='girl'){
    updateImage(girl);
}else if(props.avatar=='lady'){
    updateImage(lady);
}else if(props.avatar=='among'){
    updateImage(among);
}

},[]);






return (<div className='w3-animate-left'>
    
    <div style={{width:'80%', position:'relative'}} className="w3-left-align w3-display-container">

<img style={{width:'50px'}} src={image}/>
<div style={{background:'#017C5F', boxShadow:'inset 0px 4px 4px rgba(0, 0, 0, 0.25)', textAlign:'left'}} className='w3-container w3-round-xlarge w3-text-white'>
<p>
{props.message}



</p>

</div>



</div>
    </div>);
}

export default Received;