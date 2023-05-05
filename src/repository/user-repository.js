
const user = require('../models/user');
const crudRepository = require('./crud-repository');

class UserRepository extends crudRepository{

    constructor(){
        super(user);

    }
    
    async getByEmail( email ){

        try {
            
            const response = await user.findOne({
                email: email
            });
            return response;
        } 
        catch (error) {
            console.log('somethings wrong in user- repo layer');
            throw error;
        }
    }
}

module.exports = UserRepository;