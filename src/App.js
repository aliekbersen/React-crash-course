import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import Login from './components/Login';
// import Welcome from './components/Welcome';

function App() {
  const [flag, setFlag] = useState(true)
  const userInfo = {
    firstname: 'Dipesh',
    lastname: 'Malvi'
  }
  const toggle = () => {
    setFlag(!flag);
  }
  
  return (
 <div>
  <Login/>
 </div>
 
    //  <div> 
  //   <button onClick={toggle}>Toggle Clock</button>
  //   {flag ? <Clock /> : 'No clock  component'}
  // </div>
  //  <div className="App">
  //     <Welcome user='Ali'/>
  //     <Welcome user='Ekber'/>
  //     <Welcome user='Sen'/>
  //   </div>
  );
}


export default App;
