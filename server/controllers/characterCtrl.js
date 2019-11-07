

module.exports = {
    getCharacters: async (req, res) => {
        const { id } = req.params
        const user_id = id
        const db = req.app.get('db')
        const characters = await db.get_characters(user_id)
        res.status(200).send(characters)
    },
    newCharacter: (req, res) => {
        const { name, level, hp, strength, dex, con, intellect, wis, cha, spells, actions, bio, user_id } = req.body
        const db = req.app.get('db')
        const newCharacter = db.new_character([name, level, hp, strength, dex, con, intellect, wis, cha, spells, actions, bio, user_id])
        return res.status(200).send(newCharacter)
    },
    updateCharacter: (req, res) => {
        const { character_id, name, level, hp, strength, dex, con, intellect, wis, cha, spells, actions, bio, user_id } = req.body
        const db = req.app.get('db')
        db.update_character([name, level, hp, strength, dex, con, intellect, wis, cha, spells, actions, bio, user_id, character_id])
            .then(() => res.sendStatus(200))
    },
    deleteCharacter: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        db.delete_character(id).then(res.sendStatus(200))
    },
}
