import React, { Component } from "react";
import { Divider, Icon, Tag } from 'antd';

export default class RecipeBoxList extends Component {

	render() {
		return(
			<div>
				<h5>Board</h5>
				<Divider />

				<div>
					<Tag color="#d9e5e2"><h6>Vegetarian</h6></Tag>
					<h6>20</h6>
				</div>
			</div>


		);	
	}

}