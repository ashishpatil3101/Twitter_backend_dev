const likeService =  require('../service/like-service');

const LikeService =  new likeService();

const toggleLike = async ( req ,res )=>{

    try {
        console.log( req.query.modelId, req.query.modelType, req.body.userId )
        const result = await LikeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId  );
        
        return res.status(200).json({
            message: 'successfully toggled like ',
            success: true,
            data: result
        })
    } catch ( error) {
        
        return res.status(500).json({
            messsage: "unable proceed like service",
            error: error
        })
    }
}

module.exports ={ toggleLike};