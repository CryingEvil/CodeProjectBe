
const express = require('express');
const app = express();
const mySql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = mySql.createPool({
    host: "localhost",
    user: "root",
    database: "library"
})

app.use(cors());
app.use(bodyParser());
app.listen(3001, () =>
    console.log("running on port 3001"));

app.get('/', (req, res) => {
    const sqlState = "SELECT * FROM favorite";
    db.query(sqlState, (err, rslt) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(rslt);
        }
    })
});


app.post('/save',(req,res)=>{
    const title = req.body.title;
    const bookId = req.body.bookId;
    const sqlState = "INSERT INTO favorite (title,book_id) VALUE ('" + title +"'"+","+"'"+bookId+"')";
    db.query(sqlState, (err, rslt) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send('Berhasil');
        }
    })
})
app.post('/delete',(req,res)=>{
    const bookId = req.body.bookId;
    const sqlState = "DELETE FROM favorite WHERE ='" +bookId+"'";
    db.query(sqlState, (err, rslt) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send('result');
        }
    })
})

