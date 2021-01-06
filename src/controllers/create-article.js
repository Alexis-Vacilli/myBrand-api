import Article from '../models/articles';
import mongoose from 'mongoose';


const createArticles = (req, res) => {
    const article = new Article({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,   
        description: req.body.description,
        //articleImage: req.file.path
    });
    article
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created article successfully',
            createdArticle: {
                title: result.title,
                description: result.description,
                _id: result._id,
                request: {
                    type: 'POST',
                    url: "http://localhost:3000/articles/" + result._id
                }
            },
        });
    
    })
    .catch(err => {
        res.status(500).json({
            message: 'Server error', error: err
        })
    })
}

export default createArticles;

