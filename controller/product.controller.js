var db = require('../db');
const router = require('../routes/product.route');


module.exports.index = function(req,res){ 
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;

    var begin = (page - 1)*perPage;
    var end = page * perPage;

    var drop = (page - 1)*perPage

    res.render('products/index',{
        // products: db.get('products').value().slice(begin,end)
        products: db.get('products').drop(drop).take(perPage).value()
    });
};