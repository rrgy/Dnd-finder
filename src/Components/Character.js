import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewCharacter from './NewCharacter'
import { connect } from 'react-redux'



class Character extends Component {
    constructor() {
        super()
        this.state = {
            characterList: [],
            character: {},
            toggleEdit: false,
            toggleStats: false,
            name: '',
            level: 0,
            hp: 0,
            strength: 0,
            dex: 0,
            con: 0,
            intellect: 0,
            wis: 0,
            cha: 0,
            spells: '',
            actions: '',
            bio: '',
        }
    }

    componentDidMount() {
        axios.get(`/api/characters/${this.props.user.id}`).then(res => {
            this.setState({ characterList: res.data })
        })
    }
    newCharacter() {
        return <NewCharacter character={this.state.character} />
    }
    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    edit() {
        this.setState(prevState => ({ toggleEdit: !prevState.toggleEdit }))
    }
    updateStats() {
        axios.put('/api/character/:id', {
            name: this.state.name, level: this.state.level, hp: this.state.hp, strength: this.state.strength, dex: this.state.dex, con: this.state.con, intellect: this.state.intellect, wis: this.state.wis, cha: this.state.cha, spells: this.state.spells, actions: this.state.actions, bio:
                this.state.bio, user_id: this.props.user.id, character_id: this.state.character.character_id
        })
        this.edit()
    }
    stats(element) {
        this.setState({ character: element })
        this.setState(prevState => ({ toggleStats: !prevState.toggleStats }))
    }

    deleteCharacter(id) {
        axios.delete(`/api/character/${id}`)
    }

    render() {
        const { character } = this.state
        return (
            <div>
                <div>
                    <Link to="/new-character"><button onClick={() => this.newCharacter()}>New Character</button></Link>
                </div>
                {this.state.toggleStats ? (null) : (this.state.characterList.map((element) => {
                    return <button onClick={() => this.stats(element)} key={element.character_id}>{element.name}</button>
                }))}
                {this.state.toggleEdit ? (
                    <div>
                        <input name='name' onChange={(e) => this.handleInput(e)}></input>
                        <input name='level' onChange={(e) => this.handleInput(e)} type='number'></input>
                        <input name='hp' onChange={(e) => this.handleInput(e)} type='number'></input>
                        <input name='strength' onChange={(e) => this.handleInput(e)} type='number'></input>
                        <input name='dex' onChange={(e) => this.handleInput(e)} type='number'></input>
                        <input name='con' onChange={(e) => this.handleInput(e)} type='number'></input>
                        <input name='intellect' onChange={(e) => this.handleInput(e)} type='number'></input>
                        <input name='wis' onChange={(e) => this.handleInput(e)} type='number'></input>
                        <input name='cha' onChange={(e) => this.handleInput(e)} type='number'></input>
                        <input name='spells' onChange={(e) => this.handleInput(e)}></input>
                        <input name='actions' onChange={(e) => this.handleInput(e)}></input>
                        <input name='bio' onChange={(e) => this.handleInput(e)}></input>
                        <button onClick={() => this.updateStats()}>Keep Changes</button>
                    </div>) : (
                        <div>
                            <h3>{character.name}</h3>
                            <div>{character.level}</div>
                            <div>{character.hp}</div>
                            <div>{character.strength}</div>
                            <div>{character.dex}</div>
                            <div>{character.con}</div>
                            <div>{character.intellect}</div>
                            <div>{character.wis}</div>
                            <div>{character.cha}</div>
                            <div>{character.spells}</div>
                            <div>{character.actions}</div>
                            <div>{character.bio}</div>
                            <button onClick={() => this.edit()}>Change Stats</button>
                            <button onClick={() => this.deleteCharacter(character.character_id)}>Delete Character</button>
                        </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState
    return { user }
}
export default connect(mapStateToProps)(Character);