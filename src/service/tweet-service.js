const tweetRepository = require('../repository/tweet-repository');
const HashTagRepository = require('../repository/hashtag-repository');

class TweetService {

     constructor(){
        this.tweetRepository =  new tweetRepository();
        this.HashTagRepository =  new HashTagRepository();
     }

     async create ( data ){

        try {
            
            const content  =  data.content;
            let Tags =  content.match(/#[a-zA-z0-9_]+/g);//extracts all hashtag
            Tags =  Tags.map( (tag) =>  tag.substring(1) );
       

            const tweet = await this.tweetRepository.create(data);
         
            let alreadyPresentTags = await this.HashTagRepository.findByName(Tags);
          
            let newTags =  Tags.filter( tag => !alreadyPresentTags.includes(tag));
            
            newTags = newTags.map( ( tag )=> {
                   return {title: tag, tweets: [tweet.id]}
            }
            );

            await  this.HashTagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach( (tag) => {
               
               tag.tweets.push(tweet.id)
               tag.save()
            });
     
            return tweet;

        } 
        catch (error) {
           console.log('something is wrong in  service layer')
           throw error;    
        }
     }
}
module.exports = TweetService;