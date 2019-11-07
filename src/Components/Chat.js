import React, { Component } from 'react'
import axios from 'axios'

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            chat: []
        }
    }
    componentDidMount() {
        axios.get('/').then(res => { this.setState({ chat: res.data }) })
    }
    render() {
        return (
            <div>Chat
                {this.state.chat}
            </div>
        )
    }
}

export default Chat;