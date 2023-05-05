const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
       
    content: {
        type: String,
        required: true,
        max: [250 ,'tweet cannot be more than 250 chars']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ]
});

const tweet = mongoose.model("Tweet", tweetSchema);

module.exports = tweet;