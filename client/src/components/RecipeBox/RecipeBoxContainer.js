import React, { Component } from "react";
import RecipeBoxList from './RecipesList/RecipeBoxList';
import RecipeBoxHeader from './RecipesList/RecipeBoxHeader.js'

export default class RecipeBoxContainer extends Component {
	render() {
		return(
			<div className="container">
				<RecipeBoxHeader />
				<RecipeBoxList />
			</div>
		);
	}

}
