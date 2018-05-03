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
    console.log("Signin Console.log: ", req.body)
    const { userId, password } = req.body;
    res.json({
        status: "isLoggedin",
        userId,
        password
      })
});

app.get('/products', (req, res) => {
    console.log("Products Console.log: ", res.body)
    const { sku, productName, quantity } = res.body;
    res.json({
        sku,
        productName,
        quantity
      })
});


app.listen(PORT, () => console.log("Server is Listening to Port: ", PORT));