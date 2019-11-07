require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const characterCtrl = require('./controllers/characterCtrl')
const lfgCtrl = require('./controllers/lfgCtrl')
const auth = require('./controllers/auth')
const checkSession = require('./middleware/checkSession')

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
    app.listen(SERVER_PORT, console.log(`${SERVER_PORT}`))
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 86400000 }
}))



app.post('/api/register', auth.register)
app.post('/api/login', auth.login)
app.post('/api/logout', auth.logout)

app.get(`/api/characters/:id`, checkSession, characterCtrl.getCharacters)
app.put(`/api/character/:id`, checkSession, characterCtrl.updateCharacter)
app.post('/api/character', checkSession, characterCtrl.newCharacter)
app.delete(`/api/character/:id`, checkSession, characterCtrl.deleteCharacter)

app.get('/api/posts', checkSession, lfgCtrl.getPosts)
app.put('/api/posts/:postId', checkSession, lfgCtrl.editPost)
app.delete(`/api/posts/:id`, checkSession, lfgCtrl.deletePost)
app.post('/api/posts', checkSession, lfgCtrl.createPost)