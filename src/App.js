import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import NavBar from './components/NavBar/NavBar';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
<div className='background'>
  <FirstScreen/>
  <SecondScreen/>
  <ThirdScreen/>
  </div>
  </>
}

export default App;
