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
        const response = await axios.get('http://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=e8084c8d2eb34921b1052f1b338813d4')
        console.log(response.data.articles[1].url)
        const noticias = response.data.articles;
        console.log(noticias)
        this.setState({ noticias });
    } 
   
    render(){
      
        return (
            <div className="noticias"> 
                {this.state.noticias.map(noticias => (
                 <ul>
                    <li className="titulo">{noticias.title}</li>
                    <li className="descricao">{noticias.description}</li>
                    <li><a href={noticias.url} className="url" target="_blank">{noticias.url}</a></li>
                </ul>
                 
                ))}
                

            </div>

        )}
    
}