let express = require("express");
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '18512',
    database: 'qualime'
});
connection.connect(function (err) {
    console.log('connected');
    if (err) throw err;
});

module.exports = (express) => {
    const router = express.Router();

    // Достать subjects
    router.route("/subjects")
        .get(function (req, res, next) {
            const sql = `SELECT * from qualime.subject`;
            const query = connection.query(sql, (err, result) => {
                console.log(result)
                if (err) throw err;
                res.send(result);
            })
        });
// Достать subtopic
    router.route("/subtopics/:idsubject")
        .get(function (req, res, next) {
            console.log(req.params.idsubject);
            const sql = `SELECT * FROM qualime.subtopic where idsubject= ${req.params.idsubject}`;
            const query = connection.query(sql, (err, result) => {
                console.log(result)
                if (err) throw err;
                res.send(result);
            })
        });

    router.route("/subtopic/:idsubtopic")
        .get(function (req, res, next) {
            const sql = `SELECT * FROM qualime.subtopic WHERE idsubtopic = ${req.params.idsubtopic}`;
            const query = connection.query(sql, (err, result) => {
                console.log(result)
                if (err) throw err;
                res.send(result);
            })
        });
    router.route("/subject/:idsubject")
        .get(function (req, res, next) {
            console.log(req.params.idsubject);
            const sql = `SELECT * FROM qualime.subject where idsubject= ${req.params.idsubject}`;
            const query = connection.query(sql, (err, result) => {
                console.log(result)
                if (err) throw err;
                res.send(result);
            })
        });
    router.route("/tasks/:idsubject")
        .get(function (req, res, next) {
            console.log(req.params.idsubject);
            const sql = `SELECT * FROM qualime.tasks where idsubject= ${req.params.idsubject}`;
            const query = connection.query(sql, (err, result) => {
                console.log(result)
                if (err) throw err;
                res.send(result);
            })
        });
    router.route("/questions/:idtask")
        .get(function (req, res, next) {
            console.log(req.params.idsubject);
            const sql = `SELECT * FROM qualime.questions where idtask= ${req.params.idtask}`;
            const query = connection.query(sql, (err, result) => {
                console.log(result)
                if (err) throw err;
                res.send(result);
            })
        });

    router.route("/listoptions/:idquestion")
        .get(function (req, res, next) {
            console.log(req.params.idsubject);
            const sql = `SELECT * FROM qualime.listoptions 
                    INNER JOIN answers ON listoptions.idoptions=answers.idoption 
                    WHERE idquestion= ${req.params.idquestion}`;
            const query = connection.query(sql, (err, result) => {
                console.log(result)
                if (err) throw err;
                res.send(result);
            })
        });

    return router;
}