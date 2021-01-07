import Article from '../models/articles'

const readArticle = (req, res) => {
    const {
        id
    } = req.params;
    if (id) {
        Article.findOne({
            _id: id
        }).then((response) => {
            console.log(response);
            res.status(200).json(response);
        }).catch((err) => {
            res.status(500).json({
                error: err
            });
            console.log(err);
        });
    } else {
        res.status(404).json({
            message: 'there is no blog with this id',
        });
    }
};


export default readArticle