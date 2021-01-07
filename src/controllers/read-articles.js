import Article from '../models/article';

const readArticles = (req, res) => {
    Article.find()
        .select('title description _id articleImage')
        .exec()
        .then(docs => {
            console.log(docs);
            const response = {
                count: docs.length,
                articles: docs.map(doc => {
                    return {
                        title: doc.title,
                        description: doc.description,
                        //articleImage: doc.articleImage,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: `"http://localhost:3000/articles/" ${doc._id}`
                        }
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Server error',
                error: err
            });
        })
};

export default readArticles;