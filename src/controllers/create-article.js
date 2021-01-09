import Article from '../models/create-article';
import uploader from '../config/cloudinary'
import mongoose from 'mongoose';


const createArticles = async (req, res) => {
    let article;
    try {
        if (req.files) {
            const tmp = req.files.image.tempFilePath;
            const res1 = await uploader.upload(tmp, (_, res1) => res1);
            article = new Article({
                _id: new mongoose.Types.ObjectId(),
                title: req.body.title,
                description: req.body.description,
                imageUrl: String(res1.url)
            });
        } else {
            article = new Article({
                _id: new mongoose.Types.ObjectId(),
                title: req.body.title,
                description: req.body.description,
            });
        }
        const post = await article.save();
        return res.status(201).json({
            message: 'Created article successfully',
            article: post
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',

        });
    }
}


export default createArticles;