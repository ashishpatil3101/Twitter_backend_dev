 const tweetService  =  require('../service/tweet-service');

const TweetService  =  new tweetService();

const createTweet = async ( req, res )=>{

    try {
         
        const tweet = await TweetService.create( req.body );

        return res.status(201).json({
            data: tweet,
            success: true,
            message: 'successfully tweet created'
        })
    } 
    catch (error) {
        return res.status(201).json({
            data: {},
            success: false,
            message: 'not able to  create tweet',
            error
        })
    }
};

module.exports = {
    createTweet
}