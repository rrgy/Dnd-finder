import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Character from './Components/Character'
import ChatList from './Components/ChatList'
import Lfg from './Components/Lfg'
import Login from './Components/Login'
import NewCharacter from './Components/NewCharacter'
import Chat from './Components/Chat'
import CreatePost from './Components/CreatePost'

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/character' component={Character} />
        <Route path='/chat-list' component={ChatList} />
        <Route path='/lfg' component={Lfg} />
        <Route path='/new-character' component={NewCharacter} />
        <Route path='/chat' component={Chat} />
        <Route path='/post' component={CreatePost} />
    </Switch>
)