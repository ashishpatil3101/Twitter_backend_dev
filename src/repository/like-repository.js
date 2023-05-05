const like =  require('../models/likeable');
const crudRepository = require('./crud-repository');

class likeRepository extends crudRepository{

    constructor(){
        super(like);
    }

    async finduserAndLikeable( data ){

        try {
            
            const response  = await like.findOne( data);
            return response;
        } 
        catch (error) {
            console.log('somethings wrong in crud-repo layer');
            throw error;

        }
    }
}

module.exports = likeRepository