
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import UserList from './pages/userList/UserList';
function App() {
  return (
    <Router>
    <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
     </Routes> 
       
      </div>
</Router>
  );
}

export default App;
