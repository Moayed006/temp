import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes , Route, Link} from 'react-router-dom';
import Home from '../Home/Home'
import Login from '../Login/Login'
import Users from '../Users/Users'
import Logs from '../Logs/Logs'

function App() {
  const value = Math.random();
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/" className="navbar-brand" >Admin Tool</Link>
        <div className="navbar-nav nr-auto">
          <li className='nav-item'>
            <Link to="/users" className="nav-link" >Users</Link>
          </li>

          <li className='nav-item'>
            <Link to="/logs" className="nav-link" >Logs</Link>
          </li>

         
        
        </div>
        <div className ="container mt-3">
          <Routes>
              <Route path="/" element= {<Home/>} />
              <Route path="/login" element= {<Login/>} />
              <Route path="/logs" element= {<Logs/>} />
              <Route path="/users" element= {<Users/>} />
          </Routes>

        </div>

      </nav>
    </div>
  );
}

export default App;
