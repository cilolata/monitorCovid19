import React, { Component } from 'react';
import "./footer.css"

export default class Footer extends Component {
    render() {
        return(
                <div className="foo" >
                    <p className="creditos">API NEWS by <a href="https://newsapi.org/" className="creditos">Google</a></p>
                    <p className="creditos">API CoronaVírus by <a href="https://github.com/cilolata/API" className="creditos">NovelCOVID</a></p>
                </div>
        )
    }

}