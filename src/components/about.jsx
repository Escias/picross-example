import React from 'react';

import { withRouter } from "react-router";
import {connect} from "react-redux";

class About extends React.Component {
	constructor() {
		/**
		* super() permet d'acès aux variables et aux fonctions du ou des parents.
		* Les parents d'une class sont définis après extends.
		*/
		super();

		/**
		* Permet de définir une variable global à la class.
		* 
		* this.authors est un tableau d'objet.
		*/
		this.authors = [
			{
				pseudo: 'Angamara'
			}
		];
	}

	render() {
		const {  autor } = this.props;
		return (
			<div>
				{autor.map((student , i) => (
					<div key={i}>
						{student.name}, {student.age}, {student.sexe}<br />
					</div>
				))}
			</div>
		);
	}
}




const mapStateToProps = state => {
	return {
		/**
		 * this.props.profil
		 * state.profil est défini dans /redux/reducer.jsx
		 */
		profil: state.profil,
		autor: state.autor,

	};
}

export default withRouter(connect(
	mapStateToProps
)(About));
/*
* Connecte la class au router
*/
