import './Nav.css';
import { useState } from "react";
import Nav_Var from './Var';
import { withRouter } from "react-router-dom";

function Navbar() {
	//const [menuToggle, setMenuToggle] = useState<boolean>(false);
	let [menuToggle, setMenuToggle] = useState(false)
	const menusetter = () => setMenuToggle(!menuToggle);

    return (
        <div className="navbar">
			<div className='Menubar'>
				<Nav_Var></Nav_Var>
				<p className='Nav-Mainname'>Nympheia</p>
			</div>
            <nav className="Menu">
                <header className="Nav-Major">
					<p className='Nav-Mainname'>Nympheia</p>
					<ul className='elements'>
						<li><a className='elements-item' href='/nympheia'>Home</a></li>
						<li><a className='elements-item' href='/nympheia/introduce'>Intro</a></li>
						<li><a className='elements-item' href='/nympheia/using'>Using</a></li>
						<li><a className='elements-item' href='/nympheia/tutorial'>Tutorial</a></li>
						<li><a className='elements-item' href='/nympheia/editor'>Editor</a></li>
					</ul>
				</header>
			</nav>			
		</div>
    );
}

export default Navbar;