
import './App.css';
import Welcome from './components/Welcome';

function App() {
  const userInfo = {
    firstname: 'Dipesh',
    lastname: 'Malvi'
  }
  
  return (
    <div className="App">
      <Welcome user='Ali'/>
      <Welcome user='Ekber'/>
      <Welcome user='Sen'/>
    </div>
  );
}

export default App;
