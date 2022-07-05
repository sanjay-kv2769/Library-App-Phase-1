const express = require('express');
const signupRouter = express.Router();
function router(nav){

    var books = [
        {
            title: 'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"Tom.jpg"
        },
        {
            title: 'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:"Harry.jpg"
        },
        {
            title: 'Pathumayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:"basheer.jpg"
        }
    ]
    // 2nd router method
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav,
            title:'Library',
            books
        });
    });
    // booksRouter.get('/single',function(res,res){
    //     res.send("Hey Iam a Single Book");
    // });
    
    signupRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav,
            title:'Library',
            book: books[id]
        })
    });
    return signupRouter;
}

module.exports = router;

