const tweetRepository = require('../repository/tweet-repository');
const HashTagRepository = require('../repository/hashtag-repository');

class TweetService {

     constructor(){
        this.tweetRepository =  new tweetRepository();
        this.HashTagRepository =  new HashTagRepository();
     }

     async create ( data ){

        try {
         console.log(data);
            const content  =  data.content;
            let Tags =  content.match(/#[a-zA-z0-9_]+/g);//extracts all hashtag
            Tags =  Tags.map( (tag) =>  tag.substring(1).toLowerCase());
           
            const tweet = await this.tweetRepository.create(data);
         
            let alreadyPresentTags = await this.HashTagRepository.findByName(Tags);
            const presentTweetAfterFilter = [];
            alreadyPresentTags.forEach(TWEET => presentTweetAfterFilter.push(TWEET.title))
         
            let newTags =  Tags.filter( tag => !presentTweetAfterFilter.includes(tag));
            
            newTags = newTags.map( ( tag )=> {
                   return {title: tag, tweets: [tweet.id]}
            }
            );
            console.log("new tasg",newTags);

           if (newTags.length != 0) await  this.HashTagRepository.bulkCreate(newTags);
        
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

     async get( id ){

         try {
             
            const tweet = await this.tweetRepository.getWithComments( id );
            return tweet;

         } 
         catch (error) {
           
            console.log('something is wrong in  service layer')
           
            throw error; 
         }
     }
}
module.exports = TweetService;