module.exports = {
    getPosts: (req, res) => {
        const db = req.app.get('db')
        db.get_posts().then(posts => res.status(200).send([posts]))
    },
    editPost: (req, res) => {
        const { postId } = req.params
        const { title, post_field } = req.body
        const db = req.app.get('db')
        db.update_post([title, post_field, postId])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'error' })
                console.log(err)
            })
    },
    deletePost: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        db.delete_post(id).then(res.sendStatus(200))
    },
    createPost: (req, res) => {
        const { title, post_field, author, dm } = req.body
        console.log(req.body)
        const db = req.app.get('db')
        db.create_post([title, post_field, author, dm])
            .then(post => res.status(200).send(post))
            .catch(err => { res.sendStatus(500), console.log(err) })
    }
}