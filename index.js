const express = require('express');
const bodyParser = require('body-parser');

var userRoute =  require('./routes/user.route');
const { use } = require('./routes/user.route');

const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', (req,res) =>{ 
    res.render('index', {
        name : 'Khanh'
    });
});

app.use('/users', userRoute);

app.listen(port, function() {
    console.log(`Example app listening on port ${port}! `)
});