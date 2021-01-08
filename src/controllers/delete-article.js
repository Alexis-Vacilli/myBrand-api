import Article from '../models/articles';

const deleteArticle = (req, res) => {
    const {
        id
    } = req.params;
    Article.findByIdAndDelete({
            _id: id
        }).then(() => {
            res.status(200).json({
                message: 'Article deleted',
            });
        })

        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        });
};

export default deleteArticle;