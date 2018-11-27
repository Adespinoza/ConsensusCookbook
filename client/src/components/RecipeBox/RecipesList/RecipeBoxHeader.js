import React, { Component } from "react";
import { Row, Col } from 'antd';

export default class RecipeBoxHeader extends Component {
	render() {
		return(
			<React.Fragment>
				<h2 id="box-container">🥞 Cookbook Box</h2>
				<div>
					<Row>
						<Col span={18}>
							<p> Using Blockchain Technology, we are able to create a curated amalgamation of tried and true recepies that are gauranteed to knock the socks off your next meal. Each 'Cookbook' card has a list of recepies created by users like ⭐️YOU⭐️and are purchased using Ethereum. When a cookbook is purchase, you are then able to then look at the individual recepies. Bon Appétit 🎉</p>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}