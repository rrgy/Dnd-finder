import React from 'react'
import io from 'socket.io-client'

const socket = io()
class Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            chats: [],
            message: '',
            room: 0,
        }
    }

    componentDidMount() {
        this.socket = io()
        this.socket.on('Joined room', () => {
            console.log('bwoop bwoop')
        })
    }

    render() {
        console.log(socket)
        return (
            <div>chat</div>
        )
    }
}

export default Chat;