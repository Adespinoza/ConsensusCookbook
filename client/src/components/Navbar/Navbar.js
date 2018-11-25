import React, { Component } from "react";

class Navbar extends Component {

	render() {
		return(
			<div className="container-fluid" id="navigation_menu">
				<div className="navbar-header">
					<a href="">
	              		<div className="navbar-brand">
	              			<h3>Consensus Cookbook
	              			<img draggable="false" className="emoji" alt="🍳" src="https://s.w.org/images/core/emoji/11/svg/1f373.svg"/></h3>
	              		</div>
	          		</a>
				</div>

				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul id="menu-home" className="nav navbar-nav">
						<li id="menu-item-10" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10"><a title="About" href="https://notionpages.com/about/">About</a></li>
						<li id="menu-item-13" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13"><a title="Submit" href="https://notionpages.com/submit/">Submit</a></li>
					</ul>
				</div>
			</div>
		);
	}
}
 
export default Navbar;
