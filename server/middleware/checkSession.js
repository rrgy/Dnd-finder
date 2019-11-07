module.exports = function (req, res, next) {
    const { session } = req

    if (!session.user) {
        return res.status(401).send('Unauthorized. Please log in')
    }
    next()
}