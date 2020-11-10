const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var userRoute =  require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require("./middlewares/auth.middleware");

const { use } = require('./routes/user.route');

const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('dasdasdasv3rqwasdas2232'));

app.use(express.static('public'));

app.get('/', (req,res) =>{ 
    res.render('index', {
        name : 'Khanh'
    });
});

app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/auth',authRoute)
app.listen(port, function() {
    console.log(`Example app listening on port ${port}! `)
});