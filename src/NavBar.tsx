import { useState } from 'react';
import './NavBar.css';

function NavBar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);

    //add the active class
    const toggleActiveClass = () => {
    setIsActive(!isActive);
    };

    //clean up function to remove the active class
    const removeActive = () => {
    setIsActive(false)
    }

    return (
    <div className="App">
        <header className="App-header">

        <nav className="navbar">

            {/* professional photo */}
            <a href='/' className="logo">Kevin's Resume Website </a>

            <ul className="navMenu">
            <li>
                <a href='/' className="navLink">Home</a>
            </li>
            <li onClick={removeActive}>
                <a href='/' className="navLink">Coming Soon</a>
            </li>
            </ul>
        </nav>

        </header>
    </div>
    );
}

export default NavBar;