import './Nav.css';
import { useState } from "react";
import Nav_Var from './Var';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
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
					<ul className='elements'>
						<li><p className='Nav-Nympheialogo'>Nympheia</p></li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName+'-main'}>
									<a href={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</header>
			</nav>
		</div>
	);
}

export default Navbar;