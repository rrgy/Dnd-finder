import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ChatList extends Component {

    render() {
        return (
            <div>ChatList
                <Link path='/chat'><button>Room</button></Link>
            </div>
        )
    }
}

export default ChatList;