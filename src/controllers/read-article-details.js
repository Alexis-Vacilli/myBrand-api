import Article from '../models/articles'

const readArticle = (req, res) => {
    const id = req.params.articleId;
    Article.findById(id)
    .select('title description _id imageUrl')
    .exec()
    .then(doc => {
        console.log('From database', doc);
        if(doc) {
            res.status(200).json({
                article: doc,
                request: {
                    type: 'GET',
                    url: ''
                }
            })
        } else {
            res.status(404).json({
                message: 'No valid entry found for provided ID'
            })
        }
    })
    // const {
    //     id
    // } = req.params;
    // if (id) {
    //     Article.findById({
    //         _id: id
    //     }).then((response) => {
    //         console.log(response);
    //         res.status(200).json(response);
    //     }).catch((err) => {
    //         res.status(500).json({
    //             message: 'Server error', error: err
    //         });
    //     });
    // } else {
    //     res.status(404).json({
    //         message: 'Not found',
    //     });
    // }
};


export default readArticle