import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/reducer'
import axios from 'axios'
import Dice from './Dice'



class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    register() {
        const user = { username: this.state.username, password: this.state.password }
        axios.post('/api/register', user)
            .then(res => {
                this.setState({
                    username: '',
                    password: '',
                })
                this.props.getUser(res.data)
                this.props.history.push('/new-character')
            })
    }
    login() {
        axios.post('/api/login', { username: this.state.username, password: this.state.password })
            .then(res => {
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.loginUser(res.data)
                this.props.history.push('/character')
            })
    }
    render() {
        return (
            <div>Login
                <Dice />
                <input name='username' onChange={(e) => this.handleInput(e)}></input>
                <input name='password' onChange={(e) => this.handleInput(e)} type='password'></input>
                <button onClick={() => this.register()}>Register</button>
                <button onClick={() => this.login()}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState
    return { user }
}
// const mapDispatchToProps = { loginUser }
export default connect(mapStateToProps, { loginUser })(Login)