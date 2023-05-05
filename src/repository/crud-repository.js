class  crudRepository{

    constructor( model){
       
        this.model = model;
    }

    async create( data ){

        try {
            
            const response  = await this.model.create( data );
            return response;

        } 
        catch (error) {
           
            console.log('somethings wrong in crud-repo layer');
            throw error;    
        }
    }
    
    async destroy( id ){

        try {
            
            await this.model.findByIdAndRemove( id );
            return true;
        } 
        catch (error) {
           
            console.log('somethings wrong in crud-repo layer');
            throw error; 
        
        }
    }
    async get( id ){

        try {
            
            const response = await  this.model.findById( id );
            return response;
        } 
        catch (error) {
           
            console.log('somethings wrong in crud-repo layer');
            throw error; 
        
        }
    }
    async update( id, data){

        try {
            
            const response = await  this.model.findByIdAndUpdate( id ,data ,{ new: true});
            return response;
        } 
        catch (error) {
           
            console.log('somethings wrong in crud-repo layer');
            throw error; 
        
        }
    }

    async getAll( offset, limit ){


        try {
              
            const reponse =  await this.model.find().skip( offset ).limit( limit );

            return reponse;
        } 
        catch (error) {
           
            console.log('somethings wrong in crud - repo layer');
            throw error;
        }
    }

}

module.exports = crudRepository;