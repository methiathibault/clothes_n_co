import logo from './assets/logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import RouterComponents from './components/RouterComponents';
import { UserProvider } from './components/AuthContext'


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <RouterComponents />
      </UserProvider>
    </div>
  );
}

export default App;
