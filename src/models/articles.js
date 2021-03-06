import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: false }

})        

const Article = mongoose.model('articles', articleSchema);

export default Article;