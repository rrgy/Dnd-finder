import React from 'react'
// import { Link } from 'react-router-dom'



const ChatList = () => {
    // const [name, setName] = useState('')
    // const [room, setRoom] = useState('')


    return (
        <div className='chat-outer-list'>
            <div className='chat-inner-list'>
                {/* <h1 className='heading'>Join</h1>
                <div><input placeholder='name' className='joinInput' type='text' onchange={(e) => setName(e.target.value)} /></div>
                <div><input placeholder='room' className='joinInput mt-20' type='text' onchange={(e) => setRoom(e.target.value)} /></div>
                <Link to={`/chat?name=${name}&room=${room}`} onClick={e => (!name || !room) ? e.preventDefault() : null}>
                    <button className='chatListButton mt-20' type='submit'>Join</button>
                </Link> */}
            </div>
        </div>
    )
}

export default ChatList