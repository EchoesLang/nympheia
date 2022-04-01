import './Nav.css';

function Navbar() {
    return (
        <div className="sidebar">

            <nav className="Menu">
                <header className="Major">
					<h2>Menu</h2>
				</header>
                <ul>
                    <li><a>Homepage</a></li>
                    <li><a>Generic</a></li>
                    <li><a>Elements</a></li>
					<li>
						<span className="Opener">Submenu</span>
						<ul>
							<li><a>Lorem Dolor</a></li>								
							<li><a>Ipsum Adipiscing</a></li>
							<li><a>Tempus Magna</a></li>
							<li><a>Feugiat Veroeros</a></li>
						</ul>
					</li>
					<li><a>Etiam Dolore</a></li>
					<li><a>Adipiscing</a></li>
					<li>
						<span className="Opener">Another Submenu</span>
						<ul>
							<li><a>Lorem Dolor</a></li>
							<li><a>Ipsum Adipiscing</a></li>
							<li><a>Tempus Magna</a></li>
							<li><a>Feugiat Veroeros</a></li>
						</ul>
					</li>
					<li><a>Maximus Erat</a></li>
					<li><a>Sapien Mauris</a></li>
					<li><a>Amet Lacinia</a></li>
				</ul>
			</nav>			

		</div>
    );
}

export default Navbar;