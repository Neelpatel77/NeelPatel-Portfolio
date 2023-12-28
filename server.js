const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/submitForm", (req, res) => {
    const { name, email, message } = req.body;

    // Log the form data (you can store it in a database or file as needed)
    console.log("Received form data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.status(200).send("Form data received successfully!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
