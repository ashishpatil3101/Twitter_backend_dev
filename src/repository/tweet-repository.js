
const  tweet =  require('../models/Tweet');

class tweetRepository{

    async create( data ){

        try {
            
            const Tweet=  await tweet.create( data );

            return Tweet;
        } 
        catch (error) {
           
            console.log('something is wrong in repository layer');
            throw error;
        }
    }

    async get( id ){

        try {
            
            const Tweets =  await tweet.findById( id );

            return Tweets;
        } 
        catch (error) {
           
            console.log('something is wrong in repository layer');
            throw error;
        }
    }

    async getWithComments( id ){

        try {
            
           const Tweets =  await tweet.findById( id ).populate({path: 'comments'});

            return Tweets;
        } 
        catch (error) {
           
            console.log('something is wrong in repository layer');
            throw error;
        }
    }
}

module.exports = tweetRepository;