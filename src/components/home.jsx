import React from 'react';

import { withRouter } from "react-router";

import { connect } from "react-redux";

class Home extends React.Component {
	constructor(props) {
		/**
		* super() permet d'acès aux variables et aux fonctions du ou des parents.
		* Les parents d'une class sont définis après extends.
		*/
		super(props);

		/**
		* Permet de définir l'état local.
		* L'état local modifie le render
		*/
		this.state = {
			value: null,
			grille: []
		}

	}

	test (event){
		let target = event.target;
		let x = target.dataset.x;
		let y = target.dataset.y;
		let grille = null;
		if (this.state.grille.length === 0) {
			grille = this.props.grille;
		} else {
			grille = this.state.grille;
		}
		console.log(grille);
		grille[y][x] = 'X';
		this.setState({ ...this.state, grille: grille });
	};

	renderSquare( x, y) {
		return(
		<button key={x} data-x={x} data-y={y}
				className="square"
					onClick={ event => this.test(event) }>
			{this.state.grille.length > 0 && this.state.grille[y][x]}
		</button>
		)
	}

	render() {
		const { grille } = this.props;

		return (
			<div>
				{grille.map((line , y) => (
					<div key={y} className="board-row">
						{line.map((square , x) => {
							return this.renderSquare(x, y)
						})}
					</div>
				))}
			</div>
		);
	}
}

/**
* Constante de lecture de redux
*
* Permet de lier le state présent dans /redux/reducer.jsx à la class
*/
const mapStateToProps = state => {
	return {
		/**
		* this.props.profil
		* state.profil est défini dans /redux/reducer.jsx
		*/
		grille: state.grille

	};
}

/**
* Connecte la class au router
* Connecte la class à Redux
* Importa la constante de lecture de redux
*/
export default withRouter(connect(
	mapStateToProps
)(Home));

