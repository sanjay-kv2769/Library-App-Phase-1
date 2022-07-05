const express = require('express'); //requiring express module
const adminRouter = express.Router(); //creating router for adminrouter
const Bookdata = require('../model/Bookdata');




function router(nav){
    adminRouter.get('/',function(req,res){
    res.render('addBook',{
        nav,
        title: 'Library'
    })
})


adminRouter.post('/add',function(req,res){
    // res.send("Hey I am added");

        // get method below 
    // var item = {
    // title: req.query.title,
    // author: req.query.author,
    // genre: req.query.genre,
    // image: req.query.image
    // }
    

// post method
    var item = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image
    }
    

    var book = Bookdata(item);
    book.save();//saving to database
    res.redirect('/books');




    res.send("Hey I'm added");
});



return adminRouter;
}

module.exports = router;