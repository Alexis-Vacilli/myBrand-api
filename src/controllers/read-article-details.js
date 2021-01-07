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
            res.status(200).json({
                message: 'Successfully fetched an article',
                response
            });
        }).catch((err) => {
            res.status(500).json({
                message: err.message, 
            });
        });
    } 
};


export default readArticle