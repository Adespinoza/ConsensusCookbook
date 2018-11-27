import React, { Component } from "react";

class Navbar extends Component {

	render() {
		return(
			<div className="container" id="navigation_menu">
				<div className="navbar-header">
					<a href="/">
	              		<div className="navbar-brand">
	              			Consensus Cookbook 
	              			<img draggable="false" className="emoji" alt="🍳" src="https://s.w.org/images/core/emoji/11/svg/1f373.svg"/>
	              		</div>
	          		</a>
				</div>
					
				<ul className="nav nav-pills justify-content-end">
					<li className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 nav-item"><a className="nav-link" title="About" href="https://github.com/Adespinoza/ConsensusCookbook">About</a></li> 
					<li className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 nav-item"><a className="nav-link active" title="Submit" href="">Submit</a></li>
				</ul>
			</div>
		);
	}
}
 
export default Navbar;
