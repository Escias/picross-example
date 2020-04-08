import React from 'react';

import { withRouter } from "react-router";

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
		return (
			<div>
				{this.authors.map((author , i) => (
					<div key={i}>
						By {author.pseudo}
					</div>
				))}
			</div>
		);
	}
}

/*
* Connecte la class au router
*/
export default withRouter(About);