import React, { Component } from 'react';
import axios from 'axios';
import './noticias.css';


export default class Noticias extends Component {

    state = {
        noticias: []
    }

    componentDidMount(){
        this.loadArticles();
    }

    loadArticles = async() => {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=e8084c8d2eb34921b1052f1b338813d4')
        const noticias = response.data.articles;
        this.setState({ noticias });
    } 
   
    render(){
        return (
            <div className="noticias"> 
                {this.state.noticias.map((noticia, index )=> (
                 <ul key={index} className="ul-noticias">
                    <li className="titulo">{noticia.title}</li>
                    <li className="descricao">{noticia.description}</li>
                    <li><a href={noticia.url} className="url" rel="noopener noreferrer" target="_blank">{noticia.url}</a></li>
                </ul>
                 
                ))}
                
            </div>

        )}
    
}