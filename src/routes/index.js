
const express =  require('express');
const tweetController = require('../controllers/tweet-controller');
const likeController = require('../controllers/like-controller');

const commentController = require('../controllers/comment-controller');
const  { signUp ,signIn} = require('../controllers/user-controller')

//for authentication we are calling isautehenticated
const { isAuthenticated } =  require('../middlewares/auth-middleware');


const rout =  express.Router();



//tweet apis
rout.post('/tweets', isAuthenticated, tweetController.createTweet);
rout.get('/tweet/:id', tweetController.getTweet);

//like apis
rout.post('/likes/toggle',likeController.toggleLike)

//comment api
rout.post('/comments', commentController.createComment);

//user Api
rout.post('/user/signup' , signUp);
rout.post('/user/signin', signIn);


module.exports = rout;