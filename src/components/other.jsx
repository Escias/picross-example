import React from 'react';

import { withRouter } from "react-router";

import { connect } from "react-redux";

import '../assets/styles.css';

class Other extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: "white"
        }
    }


    boxClick = (e) => {
        this.setState({
            bgColor: "black"
        })
    }

    createTable = () => {
            return <tr>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                <th className='case' style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}/>
                    </tr>;
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.createTable()}
                    {this.createTable()}
                    {this.createTable()}
                    {this.createTable()}
                    {this.createTable()}
                    {this.createTable()}
                    {this.createTable()}
                    {this.createTable()}
                    {this.createTable()}
                    {this.createTable()}
                </tbody>
            </table>
        )
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
        tableau: state.tableau,
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
)(Other));
