
const express = require('express');
const connect = require('./config/database');

const comment  = require('./models/comment');


const setupAndStartServer =  () =>{

    const App = express();
    
    App.listen(3000, async () =>{
        console.log('twitter server has started on 3000');
        
        await connect();

        console.log('db coonection has made');
        // const  t = await comment.create({content: "hey first tweet", userEmail: 'asfdf@gmail.com'});
        // console.log(t);

    })
}
setupAndStartServer();