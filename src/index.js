
const express = require('express');
const connect = require('./config/database');
const bodyparser =  require('body-parser')

// const comment  = require('./models/comment');

// const t  = require('./service/tweet-service')
const rout =  require('./routes/index');

// const tweet = new t();

// const userRepo = require('./repository/user-repository');
// const likeservice =  require('./service/like-service');

const setupAndStartServer =  () =>{

    const App = express();
   
    App.use(bodyparser.json());
    App.use( bodyparser.urlencoded({extended: true}));

     App.use('/Api',rout);
    
    App.listen(3000, async () =>{
        console.log('twitter server has started on 3000');
        
        await connect();

        console.log('db coonection has made .yup');
        // const  t = await comment.create({content: "figtun", userEmail: 'asfdf@gmail.com'});
        // console.log(t);
    //    await  tweet.create({content: 'checking like service #fun',likes: []});
    //const rtweet = await t.
    //   const u  = new userRepo();
    //   const l = new likeservice();

    //   await u.create({email: 'hey2gmail.com',password: 'vabh123',name: 'vabh310111'});
    //  await l.toggleLike( '645493b99f073da5bf09c7c5', 'Tweet', '64548e2cf5f66585343f8a5b');
        

    })
}
setupAndStartServer();