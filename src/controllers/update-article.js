import Article from '../models/articles';

const updateArticle = Article.updateOne({
        _id: id
    }, {
        $set: newArticle
    }).then(() => {
        res.status(201).json({
            status: 201,
            message: 'blog post updated',
            blog: newArticle,

        });
    })

    .catch((err) => {
        res.status(500).json({
            error: err
        });
    })
};

export default updateArticle