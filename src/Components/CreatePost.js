import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class CreatePost extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            post_field: '',
            dm: false
        }
    }
    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleDm() {
        this.setState(prevState => ({ dm: !prevState.dm }))
    }
    saveChanges() {
        axios.post('/api/posts', { title: this.state.title, post_field: this.state.post_field, author: this.props.user.username, dm: this.state.dm })
    }
    render() {
        return (
            <div>Post
                <input name='title' onChange={(e) => this.handleInput(e)}></input>
                <input name='post_field' onChange={(e) => this.handleInput(e)}></input>
                <input type='checkbox' onChange={() => this.handleDm()}></input>
                <button onClick={() => this.saveChanges()}>Save Changes</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState
    return { user }
}

export default connect(mapStateToProps)(CreatePost)