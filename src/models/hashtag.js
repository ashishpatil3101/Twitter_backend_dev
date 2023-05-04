const mongoose =  require('mongoose');

const hashtagSchema= new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },

    tweets: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'

        }
    ]
},{timestaps: true});

hashtagSchema.pre('save' , function ( next ){
    
     this.title.toLowerCase();
     next();
})

const hashTag =  mongoose.model('Hashtag' , hashtagSchema );

module.exports = hashTag;