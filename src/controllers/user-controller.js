const userService =  require('../service/user-service');

const UserService =  new userService();

const signUp = async ( req , res)=>{

    try {

        const user = await UserService.create( req.body );
        return res.status(200).json({
           
            success: true,
            data: user,
            message: 'user created successfully'
        })
         
    } 
    
    catch (error) {
          
        return res.status(500).json({
            
            success: false,
            error:error,
            message: 'not able to create user'
        })
    }
}
const signIn = async ( req, res ) =>{

    try {
    
        const response = await UserService.singIn( req.body.email, req.body.password);

        return res.status(200).json({
            data: response,
            success: true,
            message: "sing in successfully"
        });
    } 
    catch (error) {
        
        console.log("something is wrong is controller layer ");
        return res.status(500).json({
            error: error,
            message: "not  able to sign in"

        });
    }
}

module.exports = {
    signUp,
    signIn
}