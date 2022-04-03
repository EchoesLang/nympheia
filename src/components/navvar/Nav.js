import './Nav.css';
import { useState } from "react";
import { withRouter } from "react-router-dom";

function Navbar() {
	//const [menuToggle, setMenuToggle] = useState<boolean>(false);
	let [menuToggle, setMenuToggle] = useState(false)
	const menu = [
		{ name: "Home", address: "/" },
		{ name: "Menu-1", address: "/menu1" },
		{ name: "Menu-2", address: "/menu2" },
		{ name: "Menu-3", address: "/menu3" },
		{ name: "Menu-4", address: "/menu4" },
	];



    return (
        <div className="navbar">

            <nav className="Menu">
                <header className="Nav-Major">
					<p className='Nav-Mainname'>Nympheia</p>
					<ul className='elements'>
						<li><a className='elements-item' href='/nympheia'>Home</a></li>
						<li><a className='elements-item' href='/nympheia/introduce'>Intro</a></li>
						<li><a className='elements-item' href='/nympheia/using'>Using</a></li>
						<li><a className='elements-item' href='/nympheia/tutorial'>Tutorial</a></li>
					</ul>
				</header>
			</nav>			

		</div>
    );
}

export default Navbar;