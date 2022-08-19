
import './App.css';
import Clock from './components/Clock';
// import Welcome from './components/Welcome';

function App() {
  const userInfo = {
    firstname: 'Dipesh',
    lastname: 'Malvi'
  }
  
  return (
    <Clock />
  //  <div className="App">
  //     <Welcome user='Ali'/>
  //     <Welcome user='Ekber'/>
  //     <Welcome user='Sen'/>
  //   </div>
  );
}

export default App;
