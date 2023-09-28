import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from "./components/user/Login";
import SignUp from './components/login/SignUp';
import Register from './register/Register';
import PosttRoom from './postroom/postroom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route
        path="/home" element={<Home/>}/>
      <Route
        path="/login" element={<Login/>}/>
      <Route
        path="/register" element={<Register/>}/>
      <Route
        path="/postroom" element={<PosttRoom/>}/>
      </Routes>
    </Router>

                
                
    </>
    
    

  );
}

export default App;

