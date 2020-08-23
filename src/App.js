import React, { Component } from 'react';
import Header from './components/Header'
import { Layout } from './components/Layout'
import Meme from './components/Meme'

class App extends Component{
  render() {
    return (
      <>
        <Header />
        <Layout>
          <Meme />
        </Layout>
      </>
    )
  }
}

export default App;
