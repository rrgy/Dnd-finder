import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class NewCharacter extends Component {
    constructor() {
        super()
        this.state = {
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

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createCharacter() {
        const { name, level, hp, strength, dex, con, intellect, wis, cha, spells, actions, bio } = this.state

        axios
            .post('/api/character', { name: name, level: level, hp: hp, strength: strength, dex: dex, con: con, intellect: intellect, wis: wis, cha: cha, spells: spells, actions: actions, bio: bio, user_id: this.props.user.id })

            .then(this.setState({ name: '', level: 0, hp: 0, strength: 0, dex: 0, con: 0, intellect: 0, wis: 0, cha: 0, spells: '', actions: '', bio: '', user_id: this.props.user.id }))
    }

    render() {
        console.log(this.props.user.id)
        return (
            <div>NewCharacter
                <input value={this.state.name} name='name' onChange={(e) => this.handleInput(e)}></input>
                <input value={this.state.level} name='level' onChange={(e) => this.handleInput(e)} type='number'></input>
                <input value={this.state.hp} name='hp' onChange={(e) => this.handleInput(e)} type='number'></input>
                <input value={this.state.strength} name='strength' onChange={(e) => this.handleInput(e)} type='number'></input>
                <input value={this.state.dex} name='dex' onChange={(e) => this.handleInput(e)} type='number'></input>
                <input value={this.state.con} name='con' onChange={(e) => this.handleInput(e)} type='number'></input>
                <input value={this.state.intellect} name='intellect' onChange={(e) => this.handleInput(e)} type='number'></input>
                <input value={this.state.wis} name='wis' onChange={(e) => this.handleInput(e)} type='number'></input>
                <input value={this.state.cha} name='cha' onChange={(e) => this.handleInput(e)} type='number'></input>
                <input value={this.state.spells} name='spells' onChange={(e) => this.handleInput(e)}></input>
                <input value={this.state.actions} name='actions' onChange={(e) => this.handleInput(e)}></input>
                <input value={this.state.bio} name='bio' onChange={(e) => this.handleInput(e)}></input>
                <button onClick={() => this.createCharacter()}>Create Character</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState
    return { user }
}

export default connect(mapStateToProps)(NewCharacter);