
const Tweet = require('../repository/tweet-repository');
const  LikeRepo =  require('../repository/like-repository')

class likeService{

     constructor(){
        
        this.tweet = new Tweet();
        this.likerepository = new LikeRepo();
     }

     async toggleLike( modelId, modelType, userId){

        try {
            
            if( modelType === 'Tweet' ) {
                
                var likeable = await this.tweet.get(modelId);

            }

            else if ( modelType === 'Comment'){ }
           
            else throw new error('unknown model type')

            const exists = await this.likerepository.finduserAndLikeable({
                user: userId,
                likeable: modelId,
                onModel: modelType
            });
            
            //user liked the tweet
           
            if( exists ){
                await likeable.likes.pull(exists.id);
                await likeable.save();
                await this.likerepository.destroy(exists.id);
            }
            else{//we like thw tweet and save
                 
                const newLike = await this.likerepository.create({
                    user: userId,
                    likeable: modelId,
                    onModel: modelType
                })
             
                likeable.likes.push(newLike);
                await likeable.save();
            }

            return true;

        } 
        catch (error) {
            
            console.log('somethings wrong in like - service-layer');
            throw error;
        }
     }
}

module.exports = likeService;