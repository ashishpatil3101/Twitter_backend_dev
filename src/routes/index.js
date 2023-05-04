
const express =  require('express');
const tweetController = require('../controllers/tweet-controller');

const rout =  express.Router();

rout.post('/tweets', tweetController.createTweet);

module.exports = rout;