import react,{component} from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
      <div>
        <div className="navbar">
        <div className="container">
        <ul>
        <Link to="/home">Hem</Link>
        <Link to="/Medlemmar">Grupp2</Link>
        <Link to="/Weather">Brotthändelser</Link>
        </ul>
        </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;