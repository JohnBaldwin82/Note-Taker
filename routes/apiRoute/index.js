const fs = require("fs");
const db = require("./db/db.json");
const route = require("express").route();
const myId = require("myId");

route.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
    res.send(data);
  });
});

route.post('./api/notes', (req, res) => {
    let workNote = {
        id: myId(),
        title: req.body.title,
        text: req.body.text
    }

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err
        let workData = JSON.parse(data)

        workData.push(workNote)
        console.log(workData)

        fs.writeFile('./db/db.json', JSON.stringify(workData), (err) => {
            if (err) throw err
            res.send('This has been completed')
        })
    })
})

module.exports = route