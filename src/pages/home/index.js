import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './reducer'

@connect(state => state.home, actions)
export default class HomeIndex extends Component {
  handleUsername = () => {
    this.props.fetchUserName('jack')
  }

  render() {
    const {username} = this.props
    return (
      <div>
        <h1>home page</h1>
        <p>username:{username}</p>
        <button onClick={this.handleUsername}>change name</button>
      </div>
    )
  }
}
