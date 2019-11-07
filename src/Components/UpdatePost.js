import React from 'react'

class UpdatePost extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <input onChange={(e) => this.props.input(e)} name='title'></input>
                <input onChange={(e) => this.props.input(e)} name='field'></input>
                <button onClick={() => this.props.editPosts()}>Save Changes</button>
            </div>
        )
    }
}

export default UpdatePost