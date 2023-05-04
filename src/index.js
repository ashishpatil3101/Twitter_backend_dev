
const express = require('express');
const connect = require('./config/database');
const bodyparser =  require('body-parser')

const comment  = require('./models/comment');

const t  = require('./service/tweet-service')
const rout =  require('./routes/index');

const tweet = new t();

const setupAndStartServer =  () =>{

    const App = express();
   
    App.use(bodyparser.json());
    App.use( bodyparser.urlencoded({extended: true}));

     App.use('/Api',rout);
    
    App.listen(3000, async () =>{
        console.log('twitter server has started on 3000');
        
        await connect();

        console.log('db coonection has made .yup');
        // const  t = await comment.create({content: "hey first tweet", userEmail: 'asfdf@gmail.com'});
        // console.log(t);
    //    tweet.create({content: 'doing work #FUN #hadrwork'});
        

    })
}
setupAndStartServer();