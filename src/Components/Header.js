import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { loginUser } from '../redux/reducer'
import axios from 'axios'


function Header(props) {
    // const user = props.reducer.user ?
    const logout = () => {
        axios.post('/api/logout').then(res => {
            return <Link to='/' />
        })
    }

    return (
        <header>
            <Link to='/character'><button className='header-button'>Character</button></Link>
            <Link to='/lfg'><button className='header-button'>Find Group</button></Link>
            <Link to='/chat-list'><button className='header-button'>Chat</button></Link>
            <div>{props.user.username}</div>
            <Link to='/'><button onClick={logout}>Log Out</button></Link>
        </header>
    )
}


const mapStateToProps = reduxState => {
    const { user } = reduxState
    return { user }
}
// const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps)(Header);