import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Posts from './Posts'
import UpdatePost from './UpdatePost'



class Lfg extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            title: '',
            field: '',
            toggleEdit: false,
            postId: 0
        }
    }

    componentDidMount() {
        axios.get('/api/posts').then(res => this.setState({ posts: [...res.data[0]] }))
    }
    toggleEdit = (id) => {
        this.setState(prevState => ({ toggleEdit: !prevState.toggleEdit }))
        this.setState({ postId: id })
    }
    editPosts = () => {
        axios.put(`/api/posts/${this.state.postId}`, { title: this.state.title, post_field: this.state.field }).then(console.log('hulk smash'))
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    deletePost = (id) => {
        axios.delete(`/api/posts/${id}`)
    }


    render() {
        return (
            <div>Lfg
                <div>
                    {this.state.posts.map((element, index) => {
                        return <Posts element={element} key={index} toggleEdit={this.toggleEdit} delete={this.deletePost} />
                    })}
                </div>
                <Link to='/post'><button>Create Post</button></Link>
                {this.state.toggleEdit ? <UpdatePost input={this.handleInput} editPosts={this.editPosts} /> : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState
    return { user }
}

export default connect(mapStateToProps)(Lfg);