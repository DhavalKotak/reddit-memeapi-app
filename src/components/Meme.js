import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

class Meme extends Component {
    constructor() {
        super()
        this.state = {
            imgUrl: "",
            title: "",
            loading: false
        }
        this.fetchMeme = this.fetchMeme.bind(this)
    }

    fetchMeme() {
        this.setState({loading: true})
        fetch("https://meme-api.herokuapp.com/gimme")    
            .then(response => {
                if(!response.ok) 
                    throw new Error("Some error occured with the API")
                    
                return response.json()
            })
            .then(data => {
                this.setState({
                    imgUrl : data.url,
                    title: data.title,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({loading: false})
                console.error('There has been a problem with your fetch operation:', error)
            })
    }

    render() {
        return(
        <Container fluid>
            <Button onClick={this.fetchMeme} className="fetchButton" disabled={this.state.loading ? true : false}>Get Meme</Button><br/><br/>
            {this.state.loading ? 
            <div>
                <br/><br/><br/>
                <Spinner animation="grow" variant="warning" />
            </div> :
            <div>
                <h4>{this.state.title}</h4> 
                <img src={this.state.imgUrl} alt=""/> 
            </div>}
        </Container>
        )
    }
}
export default Meme
