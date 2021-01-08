import Article from '../models/articles';

const updateArticle = (req, res) => {
    const {
        id
    } = req.params;

    const newArticle = {
        title: req.body.title,
        description: req.body.description,
    };
    Article.updateOne({
            _id: id
        }, {
            $set: newArticle
        }).then((result) => {
            res.status(201).json({
                status: 201,
                message: 'Article updated',
                updateArticle: result,

            });
        })

        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        });
};

export default updateArticle