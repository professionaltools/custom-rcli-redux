import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import Root from './entry/index'

class App extends Component {
  render() {
    return <Root/>
  }
}

export default hot(module)(App)
