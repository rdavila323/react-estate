import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Raul'
    }
  }
  render () {
    return (<header>
      <div>Logo</div>

      <nav>
        <a href="#">creat ads</a>
        <a href="#">about us</a>
        <a href="#">log in</a>
        <a href="#" ClassName="register-btn">Register</a>
      </nav>

      </header>)
  }
}
