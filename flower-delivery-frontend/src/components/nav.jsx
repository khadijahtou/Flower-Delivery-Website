import React from "react";

function Nav() {
	return (
		<div>
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/">Shop</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/signin">Sign In</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
