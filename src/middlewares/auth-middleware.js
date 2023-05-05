const userService =  require('../service/user-service')

const UserService =  new userService();

const isAuthenticated = async ( req ,res,next ) =>{
      
 
    try {
       
        const token = req.headers['x-access-token'];
        const result  =  await UserService.isAuthenticated( token );
       
        if( !result) throw {error: 'invalid token'}

        next();
    } 
    catch (error) {
        
        return res.status(500).json({
            error: error,
            success: false,

        })
    }
}

module.exports = {isAuthenticated};