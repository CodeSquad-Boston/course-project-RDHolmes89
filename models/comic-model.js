const mongoose = require('mongoose');
const {Schema} = mongoose;
const comicSchema = new Schema({
   title: {
       type: String,
       required: [true, 'Title is required'],
       minlength: [1, 'Minimum length for the title is 1 character.']
   },
   author: {
    type: String,
    required: [true, 'Author is required'],
    minlength: [1, 'Minimum length for the author is 1 character.']
},
publisher: {
    type: String,
    required: [true, 'publisher is required'],
    minlength: [1, 'Minimum length for the publisher is 1 character.']
},
genre: {
       type: String,
       required: [true, 'Genre is required'],
       minlength: [1, 'Minimum length for the genre is 1 character.']
   },
   pages: {
    type: Number,
    min: [1, 'Minimum number of pages is 1.']
},
    rating: {
        type: Number,
        min: [1, 'Minimum number of rating is 1.'],
        max: [5, 'Maximum number of rating is 5.']
    },
    synopsis: String,
    image: String
});

const Comic = mongoose.model('comic', comicSchema);

module.exports = Comic;