import React, { Component } from 'react';
import api from '../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        pais: [],
        casos: [],
        casosHoje: [],
        casosCriticos: [],
        mortes: [],
        pessoasRecuperadas: []
    }

    componentDidMount(){
        this.loadContries();
    }

    loadContries = async () => {
        const response = await api.get('/')
        

        this.setState({ 
            pais: response.data[30].country,
            casos: response.data[30].cases,
            casosHoje: response.data[30].todayCases,
            casosCriticos: response.data[30].critical,
            mortes: response.data[30].deaths,
            pessoasRecuperadas: response.data[30].recovered
         });

        //console.log(response.data)
    };

    render(){
        const {pais, casos, casosHoje, casosCriticos, mortes, pessoasRecuperadas} = this.state;
        return (
            <div className= 'info-cases'>
                <h1>{pais}</h1>
                <p>Casos</p>
                <p><strong className="casos">{casos}</strong></p>
                <p>Casos Hoje</p>
                <p><strong className="casosHoje">{casosHoje}</strong></p>
                <p>Casos Críticos</p>
                <p><strong className="casosCriticos">{casosCriticos}</strong></p>
                <p>Mortes</p>
                <p><strong className="mortes">{mortes}</strong></p>
                <p>Pessoas Recuperadas</p>
                <p><strong className="pessoasRecuperadas">{pessoasRecuperadas}</strong></p>

            </div>
        ) 
    }
}