const  HashTag =  require('../models/hashtag');
const crudRepository = require('./crud-repository');

class HashTagRepository extends crudRepository{

    constructor(){
        super(HashTag);
    }

    async bulkCreate( data ){

        try {
             
            const tags = await HashTag.insertMany( data );
            return tags

        } 
        catch (error) {
            console.log('somethings wrong in hashtag repo layer');
            throw error;
        }
    }


    async findByName ( titleList ){

        try {
           
            const tags =  await HashTag.find({
                title: titleList
            });

            return tags;
        } 
        catch (error) {
           
            console.log('somethings wrong in hashtag repo layer');
            throw error;
        
        }
    }

 
}

module.exports = HashTagRepository;