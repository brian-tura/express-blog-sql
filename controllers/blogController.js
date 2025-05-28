const connection = require('../data/db');

const index = (req, res) => {
    const sql = "SELECT * FROM `posts`";

    connection.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({error: "Database query failed"})
        }
        res.json(results);
        console.log(results)
    })

    res.send("Elenco post")
}

const show = (req, res) => {
    res.send(`Dettaglio post ${req.params.id}`)
}

module.exports = {
    index,
    show
}