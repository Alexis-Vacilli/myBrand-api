import Article from '../models/articles';

const readArticles = (req, res) => {
    Article.find()
        .then(docs => {
            const response = {
                count: docs.length,
                articles: docs.map(doc => {
                    return {
                        title: doc.title,
                        description: doc.description,
                        imageUrl: doc.imageUrl,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: `"http://localhost:3000/articles/" ${doc._id}`
                        }
                    }
                })
            }
            res.status(200).json({
                message: 'Fetched all articles',
                response
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Server error',
                error: err
            });
        })
};

export default readArticles;