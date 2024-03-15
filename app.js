const express = require("express");
const user = require("./src/api/user")

const app = express()

app.use(express.json())

app.post('/insertData', function(req, res) {
    const { s_name, age } = req.body; // Assuming s_name and age are sent in the request body

    // Call the insertData function from database.js
    database.insertData(s_name, age)
        .then(() => {
            res.send("Data inserted successfully");
        })
        .catch((error) => {
            console.error("Error inserting data:", error);
            res.status(500).send("Error inserting data");
        });
});

app.listen(3000, (errors) => {
    if (errors)
        console.error("not working")
    else
        console.log("Listening on Port 3000")
})