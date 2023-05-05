
const  commentRepo =  require('../repository/comment-repository');
const tweetRepository = require('../repository/tweet-repository');

class commentService {

    constructor(){
        this.CommentRepository =  new commentRepo();
        this.TweetRepository =  new tweetRepository();
    }

    async create( modelId ,modelType, userId, content){
           
        try {
              
            if( modelType === 'Tweet') var commentable = await this.TweetRepository.get(modelId);
            else if( modelType === 'Comment') var commentable = await this.CommentRepository.get( modelId);
            else throw new error('unknown model type');

            const newComment  = await this.CommentRepository.create({
                commentable: modelId,
                onModel: modelType,
                userId: userId,
                content: content,
                comments: []
            });
            commentable.comments.push( newComment);
             await commentable.save();

             return newComment;
        } 
        catch (error) {
           
            console.log('somethings wrong in service layer');
            throw error;
        }

    }
}


module.exports = commentService;