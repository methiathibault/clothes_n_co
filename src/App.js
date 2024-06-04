import logo from './assets/logo.svg';
import './styles/App.css';
import Login from './components/Login.jsx'
import Testing from './components/Testing.jsx'
import {Link, Routes, Route} from 'react-router-dom';
import {UserProvider} from './components/AuthContext.jsx'


function App() {
  return (
    <UserProvider>
        <Link to="/login">login</Link>
        <Link to="/test">test</Link>
        <Routes>
      
      <Route path="/login" element={<Login/>}/>,
      <Route path="/test" element={<Testing/>}/>

    </Routes>
      
     
    </UserProvider>
  );
}

export default App;
