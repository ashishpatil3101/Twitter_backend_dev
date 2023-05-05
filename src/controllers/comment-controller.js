
const commentservice  =  require('../service/comment-service');

const CommentService  =  new commentservice();

const createComment = async ( req, res )=>{

    try {
         
        const comment = await CommentService.create( req.query.modelId ,req.query.modelType, req.body.userId,req.body.content );
        
        return res.status(201).json({
            data: comment,
            success: true,
            message: 'successfully  created the comment'
        })
    } 
    catch (error) {
        return res.status(201).json({
            data: {},
            success: false,
            message: 'not able to  comment',
            error
        })
    }
};

module.exports = {
    createComment
}