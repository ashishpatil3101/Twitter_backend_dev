const  HashTag =  require('../models/hashtag');

class HashTagRepository{

    async create( data ){

        try {
            
            const tag=  await HashTag.create( data );

            return tag;
        } 
        catch (error) {
           
            console.log('somethings wrong in hashtag repo layer');
            throw error;
        }
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

    async get( id ){

        try {
            
            const tag =  await HashTag.findById( id );

            return tag;
        } 
        catch (error) {
           
            console.log('somethings wrong in hashtag repo layer');
            throw error;
        }
    }

    async destroy( id ){

        try {
            
            await HashTag.findByIdAndRemove( id )

            return true;
        } 
        catch (error) {
           
            console.log('somethings wrong in hashtag repo layer');
            throw error;
        }
    }

    async getAll( offset, limit ){


        try {
              
            const tags =  await HashTag.find().skip( offset ).limit( limit );

            return tags;
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