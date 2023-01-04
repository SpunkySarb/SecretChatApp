
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CoverUp from './Components/CoverUp';
import CreateRoom from './Pages/CreateRoom';
import Home from './Pages/Home';
import JoinRoom from './Pages/JoinRoom';
import useMediaQuery from 'use-mediaquery';
import './w3.css';
import StartPage from './Pages/StartPage';
import ChatRoom from './Pages/ChatRoom';
import { createContext,  useState } from 'react';

export const hiddenContext = createContext();
function App() {

  const isPc = useMediaQuery("(min-width: 500px)");




  const [hidden, setHiddenStatus] = useState(true);










  const show = ()=>{

    setHiddenStatus(true);
  
  }

  const hide = ()=>{

    setHiddenStatus(false);
  }

 
  

  return (<hiddenContext.Provider value={{show,hide, hidden}}>
     <div>
      
      
      {isPc && <div style={{fontFamily:'Irish Grover'}} className='w3-text-white w3-xxlarge w3-display-middle'>This application is only available for Mobile Users, Please switch to Mobile view instead. Thank you..</div>}
      
      {!isPc&&
 <>{hidden && <CoverUp/> }



{!hidden && <Routes>
<Route path='/' element={ <Home/>}/>
<Route path='/create' element={ <CreateRoom/>}/>
<Route path='/join' element={ <JoinRoom/>}/>
<Route path='/start' element={ <StartPage/>}/>
<Route path='/chatroom' element={ <ChatRoom/>}/>
</Routes> }






</>}</div>
</hiddenContext.Provider>);
}

export default App;
