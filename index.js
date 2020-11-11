require('dotenv').config();

//console.log(process.env.SESSION_SECRET);

const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var userRoute =  require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var proRoute = require("./routes/product.route");
var cartRoute = require("./routes/cart.route");
var transferRoute = require("./routes/transfer.route");


var authMiddleware = require("./middlewares/auth.middleware");
var sessionMiddleware = require('./middlewares/session.middleware');

const { use } = require('./routes/user.route');

const port = 3000;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.use(express.static('public'));

app.get('/', (req,res) =>{ 
    res.render('index', {
        name : 'Khanh'
    });
});

app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/auth',authRoute);
app.use('/products',proRoute);
app.use('/cart',cartRoute);
app.use('/transfer',authMiddleware.requireAuth,transferRoute);

app.listen(port, function() {
    console.log(`Example app listening on port ${port}! `)
});