import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import user from './../assets/reddit.png'

class Header extends Component{
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Jumbotron fluid>
                <img src={user} className="logo" alt=""/>
                <h1>Reddit Meme API App</h1><br/>
            </Jumbotron>
        )
    }
}

export default Header