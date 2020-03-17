import React, { Component } from 'react';
import "./header.css"

export default class Header extends Component {
    render(){
        return (
            <div className="header">
            <h3 className="titulo">Maiores Informações: <a href="https://www.unasus.gov.br/especial/covid19" rel="noopener noreferrer" target="_blank">UNA SUS</a></h3>
                <ul className="lista-header">
                    <li className="avisos">Lave as mãos sempre</li>
                    <li className="avisos">Use álcool em gel 70</li>
                    <li className="avisos">Tussa e espirre no cotovelo</li>
                    <li className="avisos">Mantenha pelo menos 1 metro de distância de pessoas com sintomas</li>
                    <li className="avisos">Compre apenas o necessário no supermercado para você e sua família</li>
                    <li className="avisos">Seja solidário</li>
                </ul>
            </div>
        )
    }
}