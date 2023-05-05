
const userRepo = require('../repository/user-repository');
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')

class userService {

    constructor(){

        this.UserRepository =  new userRepo();
    }

    async create( data ){

        try {
            

            const user= await this.UserRepository.create( data );
            return user;

        } 
        catch (error) {
           
            console.log('something went wrong in user service layer');
            throw error;
        }
    }

     createToken(user){

        try {
           
            
            const result =  jwt.sign( user , 'secret',{expiresIn: '1h'});
           
            return result;
        } 
        catch (error) {
            console.log("something is wrong  service layer ");
            throw error;    
        }
    }

    async singIn( userEmail ,userPassword ){

        try {
             
            const user = await this.UserRepository.getByEmail( userEmail );
         
            const checkpass = await this.CheckPassword( userPassword , user.password);

           
            if( !checkpass ){
                throw {error: 'password is incorrect'};
            }
          
          const newJwt = this.createToken( {email: user.email, id: user.id} );
      

          return newJwt;
            
        } 
        catch (error) {
            
            console.log("something is wrong  service layer ");
            throw error;    

        }
    }

    async CheckPassword( userInputpassord , encryptedPassword){

        try {
          
            return bcrypt.compareSync( userInputpassord,encryptedPassword);

        } 
        catch (error) {
            
            console.log("password does not match");
            throw error;
        }

    }

    async isAuthenticated( token){

        try {
            
            const response = this.verifyToken( token );
           
            if( !response ){
                throw {error: "invalid token"}
            }
            const user = await this.UserRepository.get( response.id);
           
            if(!user) {
                throw {error: 'No user with the corresponding token exists'};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in the auth process");
            throw error;
        }
    }

    verifyToken( token ){

        try {
           
            const response  = jwt.verify( token , 'secret');
            return response;
            
        } 
        catch (error) {
            console.log("something is wrong  service layer ",error);
            throw error;    
        }
    }
}

module.exports = userService;