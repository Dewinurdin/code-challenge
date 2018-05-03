const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }) );
app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.send('GET Home Page')
});

app.post('/login', (req, res) => {
    console.log("Signin DB Console.log: ", req.body)
    const { userId, password } = req.body;
    res.json({
        status: "isLoggedin",
        userId,
        password
      })
});


app.listen(PORT, () => console.log("Server is Listening to Port: ", PORT));