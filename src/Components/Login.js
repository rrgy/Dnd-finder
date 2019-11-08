import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/reducer'
import axios from 'axios'
// import Dice from './Dice'



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
            <div className='login-container'>
                <div className='login'>
                    <input name='username' onChange={(e) => this.handleInput(e)} autoComplete='off' />
                    {/* <label for='username' className='label-username'> */}
                    {/* <span className='content-username'>Username</span> */}
                    {/* </label> */}
                    <input name='password' onChange={(e) => this.handleInput(e)} type='password' autoComplete='off' />
                    {/* <label for='password' className='label-passwrod'>
                        <span className='content-password'>Password</span>
                    </label> */}
                    <div className='login-buttons'>
                        <button onClick={() => this.register()}>Register</button>
                        <button onClick={() => this.login()}>Login</button>
                    </div>
                </div>
                {/* <div>
                    <Dice />
                </div> */}
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