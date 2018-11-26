import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

	const imgStyle = {
		width:'100%',
		height: '600px'
	};

class LandingImage extends Component {

	render() {
		return(
			<Carousel autoplay>
				    <div><img style={imgStyle} src="https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81a4ea76e9cc47e5107a565e69883e34&auto=format&fit=crop&w=2251&q=80"/></div>
    				<div><img style={imgStyle} src="https://images.unsplash.com/photo-1508709315803-6342a28d32a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=510d94ad59de3a1dbf0615cf9c2fc458&auto=format&fit=crop&w=2263&q=80"/></div>
    				<div><img style={imgStyle} src="https://images.unsplash.com/photo-1540460004923-b4ca56c13092?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7f34822ec4dcb912afe26623fcc814a0&auto=format&fit=crop&w=2250&q=80"/></div>
			</Carousel>
		);
	}
}
 
export default LandingImage;