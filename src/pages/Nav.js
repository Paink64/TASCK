import {Link} from 'react-router-dom'


function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
      <nav>
          <h3>Logo</h3>
          <ul className="nav-links"> 
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/projects'>
                    <li>Projects</li>
                </Link>
                <Link style={navStyle} to='/tasks'>
                    <li>Tasks</li>
                </Link>
          </ul>

      </nav>
    );
  }
  
  export default Nav;
  