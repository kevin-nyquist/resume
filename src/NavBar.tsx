import './css/NavBar.css';
import { Link } from "react-router-dom"

function NavBar() {
    return (
    <div className="App">
        <header className="App-header">
            <nav className="navbar">

                <Link to='/resume-website' className="logo">Welcome</Link>

                <ul className="navMenu">
                <li>
                    <Link to='/resume-website' className="navLink">Home</Link>
                </li>
                <li>
                    <Link to='/resume-website/projects' className="navLink">Projects</Link>
                </li>
                </ul>
            </nav>
        </header>
    </div>
    );
}

export default NavBar;