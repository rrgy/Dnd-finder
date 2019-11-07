import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            showPost: false,
        }
    }
    toggle() {
        this.setState(prevState => ({ showPost: !prevState.showPost }))
    }

    render() {
        console.log(this.props)
        const post = this.props.element
        return (
            <div>
                {post.dm ? (<div style={{ color: 'maroon' }} onClick={() => this.toggle()}>{post.title}</div>) : (
                    <div onClick={() => this.toggle()}>{post.title}</div>)}
                <div>{post.author}</div>
                {this.props.user.username === post.author ? (<><button onClick={() => this.props.toggleEdit(post.post_id)}>Edit</button> <button onClick={this.props.delete(post.post_id)}>Delete</button></>) : null}
                {this.state.showPost ? (<div>{post.post_field}</div>) : (null)}
                <br></br>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState
    return { user }
}

export default connect(mapStateToProps)(Posts)