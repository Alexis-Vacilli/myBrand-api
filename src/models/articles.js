import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {
        type: String,
        required: false
    }

})   

export default mongoose.model('Articles', articleSchema);