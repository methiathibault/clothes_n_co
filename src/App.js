import logo from './assets/logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import RouterComponents from './components/RouterComponents';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterComponents />
    </div>
  );
}

export default App;
