import React, { Component } from "react";
import { Divider, Icon, Tag, Row, Col, Card } from 'antd';

import american_cookbook from '../../../assets/images/american_cookbook.jpg';
import chinese_cookbook from '../../../assets/images/chinese_cookbook.jpg';
import indian_cookbook from '../../../assets/images/indian_cookbook.jpg';
import italian_cookbook from '../../../assets/images/italian_cookbook.jpg';
import japanese_cookbook from '../../../assets/images/japanese_cookbook.jpg';
import mexican_cookbook from '../../../assets/images/mexican_cookbook.jpg';
import thai_cookbook from '../../../assets/images/thai_cookbook.jpg';
import vegetarian_cookbook from '../../../assets/images/vegetarian_cookbook.jpg';

	var cardStyle = {
		height: '400px',
		overflow: 'auto',
	}

	var imageStyle = {
    	maxHeight: '175px',
    	objectFit: 'cover',
	}

export default class RecipeBoxList extends Component {
	
	render() {
		return(
			<div>
				<h5>Board</h5>
				<Divider />

				<Row gutter={16}>
					<Col className="gutter-row" span={6}>
						<Tag color="#d9e5e2" style={{ margin: 10 }}><h6>Vegetarian</h6></Tag>
						<Card 
							bordered={true} 
							cover={<img alt="example" src={vegetarian_cookbook} />} 
							style={cardStyle}
						>
							<p>
							🥔 Sweet Potato Kale Frittata <br />
							🍞 Grilled Squash Garlic Bread <br />
							🥣 Slow Cooker Curried Butternut Squash Stew <br />
							🧀 Vegetable and Three-Cheese Stuffed Shells <br />
							🍅 Spiced Tomato Soup with Flatbread <br />
							</p>
						</Card>
					</Col>

					<Col className="gutter-row" span={6}>
						<Tag color="#fcddd5" style={{ margin: 10 }}><h6>American</h6></Tag>
						<Card 
							bordered={true} 
							cover={<img alt="example" src={american_cookbook} />} 
							style={cardStyle}
						>
							<p>
								🍔 All American 1/4 Burger <br />
								🧀 Gouda Mac & Cheese <br />
								🍠 Sweet Potato Pie <br />
								🍞 Mamas Homemade Cornbread <br />
								🥔 Fully Loaded Oven Baked Potato <br />
							</p>
						</Card>
					</Col>

					<Col className="gutter-row" span={6}>
						<Tag color="#dbdbf7" style={{ margin: 10 }}><h6>Chinese</h6></Tag>
						<Card 
							bordered={true} 
							cover={<img alt="example" src={chinese_cookbook} />} 
							style={cardStyle}
						>
							<p>
								🐷 Moo Shu Pork<br />
								🥬 Veggie Egg Rolls<br />
								🍜 Won Ton Soup<br />
								🥟 Homemade Dumplings<br />
								🥢 Traditional Chowmein<br />
							</p>
						</Card>
					</Col>

					<Col className="gutter-row" span={6}>
						<Tag color="#f9eed9" style={{ margin: 10 }}><h6>Japanese</h6></Tag>
						<Card 
							bordered={true} 
							cover={<img alt="example" src={japanese_cookbook} />} 
							style={cardStyle}
						>
							<p>
								🍗 Tonkatsu or Chicken Katsu <br />
								🍝 Japanese Mentaiko Spaghetti <br />
								🥩 Gyudon(Beef Bowl) <br />
								🍚 Mapo Tofu <br />
								🍲 Oyakodon <br />
							</p>
						</Card>
					</Col>
				</Row>

				<br />

				<Row gutter={16}>
					<Col className="gutter-row" span={6}>
						<div style={{display: 'inline-block'}}>
							<Tag color="#d9e5e2" style={{ margin: 10 }}><h6>Indian</h6></Tag>
							<h6>90</h6>
						</div>
						<Card 
							bordered={true} 
							cover={<img alt="example" style = {imageStyle} src={indian_cookbook}/>} 
							style={cardStyle}
						>
							<p>
								🍛 Chicken Tikka Masala <br />
								🥔 Naan and Potato Curry <br />
								🍚 Vegetarian Korma <br />
								🌶 Indian Chickpeas <br />
								🐑 Kashmiri Lamb <br />
							</p>
						</Card>
					</Col>

					<Col className="gutter-row" span={6}>
						<Tag color="#fcddd5" style={{ margin: 10 }}><h6>Italian</h6></Tag>
						<Card 
							bordered={true} 
							cover={<img alt="example" style = {imageStyle} src={italian_cookbook} />} 
							style={cardStyle}
						>
							<p>
								🍕 Cauliflower Veggie Pizza <br />
								🍨 Homemade Gelato <br />
								🍅 Panzanella <br />
								🍝 Spaghettii <br />
								🍘 Cicchetti <br />
							</p>
						</Card>
					</Col>

					<Col className="gutter-row" span={6}>
						<Tag color="#dbdbf7" style={{ margin: 10 }}><h6>Mexican</h6></Tag>
						<Card 
							bordered={true} 
							cover={<img alt="example" style = {imageStyle} src={mexican_cookbook} />} 
							style={cardStyle}
						>
							<p>
								🧀 Enchilada Suazas<br />
								🍗 Mexican Chicken Tortillas<br />
								🍲 Mexican Tortilla Soup <br />
								🥑 Salsa Chicken<br />
								🌯 Burrito Pie<br />
							</p>
						</Card>
					</Col>

					<Col className="gutter-row" span={6}>
						<Tag color="#f9eed9" style={{ margin: 10 }}><h6>Thai</h6></Tag>
						<Card 
							bordered={true} 
							cover={<img alt="example" style = {imageStyle} src={thai_cookbook} />} 
							style={cardStyle}
						>
							<p>
								🥭 Mango Sticky Rice<br />
								🥥 Coconut Soup<br />
								🍚 Authentic Pad Thai<br />
								🍜 Pad Kee Mow (Drunken Noodles)<br />
								🥒 Yam Taeng<br />
							</p>
						</Card>
					</Col>
				</Row>
			</div>


		);	
	}

}