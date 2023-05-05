
const user = require('../models/user');
const crudRepository = require('./crud-repository');

class UserRepository extends crudRepository{

    constructor(){
        super(user);
    }

}

module.exports = UserRepository;