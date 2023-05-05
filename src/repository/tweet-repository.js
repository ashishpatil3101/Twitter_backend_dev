
const  tweet =  require('../models/Tweet');
const crudRepository = require('./crud-repository');

class tweetRepository  extends crudRepository{

    constructor(){
        super( tweet );
    }

    
    async getWithComments( id ){

        try {
            
           const Tweets =  await tweet.findById( id ).populate({path: 'comments'});

            return Tweets;
        } 
        catch (error) {
           
            console.log('something is wrong in twitter repository layer');
            throw error;
        }
    }

   

}

module.exports = tweetRepository;