const Comment = require('../models/comment');
const crudRepository =  require('./crud-repository')


class commentRepository extends crudRepository{ 
    
    constructor(){

        super(Comment);
    }


}

module.exports = commentRepository;