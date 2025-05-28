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
}

const show = (req, res) => {
    const id = req.params.id

    const sql = "SELECT * FROM `posts` WHERE id = "+id;

    connection.query(sql, [id], (err, results) => {
        if(err) {
            return res.status(500).json({error: "Database query failed"})
        }
        res.json(results[0]);
        console.log(results[0])
    })
}

const destroy = (req, res) => {
    const id = req.params.id

    connection.query("DELETE FROM `posts` WHERE id = ?", [id], (err) => {
         if(err) {
            return res.status(500).json({error: "Database query failed"})
        }
        res.sendStatus(204);
    })
}

module.exports = {
    index,
    show,
    destroy
}