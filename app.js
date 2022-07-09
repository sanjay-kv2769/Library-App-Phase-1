
const express = require('express');
// const booksRouter = express.Router();
const app = express();
const nav = [
    {
        link:'/books',name:'Books'},
    {
        link:'/authors',name:'Authors'},
    {
        link:'/admin',name:'Add Book'},
    {
        link:'/adminauth',name:'Add Author'},
    {
        link:'/signup',name:'Sign Up'},
    {
        link:'/login',name:'Log In'},
];

// seperating files
const booksRouter = require('./src/routes/bookRoutes')(nav)  //passing nav to bookRoutes.js
const adminRouter = require('./src/routes/adminRoutes')(nav) //passing nav to adminRoutes.js
const adminauthRouter = require('./src/routes/adminauthRoutes')(nav) //passing nav to adminauthRoutes.js
const authorsRouter = require('./src/routes/adminauthRoutes')(nav)
// const authorRouter = require('./src/routes/authorRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
// ejs step below and also index.html>index.ejs
app.set('view engine','ejs');
app.set('views','./src/views');
// 2nd router method
app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/adminauth',adminauthRouter);
app.use('/authors',authorsRouter);
// app.use('/author',authorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",
    {
        // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title:'Library'
    });

});



app.listen(4600); 

