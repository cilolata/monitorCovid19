import React, { Component } from 'react';
import "./footer.css"

export default class Footer extends Component {
    render() {
        return(
                <footer className="foo" >
                    <p className="creditos">API NEWS by <a href="https://newsapi.org/" className="creditos">Google</a></p>
                    <p className="creditos">API CoronaVírus by <a href="https://github.com/NovelCOVID/API" className="creditos">NovelCOVID</a></p>
                    <p className="creditos coders">Coded by <a href="https://github.com/cilolata" target="_blanck">Ciça Lolata</a>
                     <a href="https://github.com/irailtonreis" target="_blanck">Irailton Reis</a>
                     <a href="https://github.com/irailtonreis" target="_blanck">Renato Almeida</a>
                     </p>
                </footer>
        )
    }

}