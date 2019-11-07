const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        let foundUser = await db.check_user(username)
        foundUser = foundUser[0]
        if (foundUser) {
            res.status(401).send('username already exists')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let createUser = await db.register_user({ username, password: hash })
        createUser = createUser[0]

        res.status(200).send(createUser)
    },
    login: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        let foundUser = await db.check_user(username)
        foundUser = foundUser[0]
        if (!foundUser) {
            res.status(401).send('username already exists')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if (authenticated) {
            delete foundUser.password
            req.session.user = foundUser
            res.status(202).send(req.session.user)
        } else {
            res.status(401).send('password is incorrect')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}