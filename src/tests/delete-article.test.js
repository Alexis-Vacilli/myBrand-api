import server from '../../server';
import chai, {should, expect} from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

describe('Delete article', async () => {
    it('Should delete an article',  (done) => {
        chai.request(server)
        .delete('/api/v1/articles/5fc35d4283da6fe0e90e89ec')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.have.property('message').eql('Article deleted')
            done()
        })
        
    })
    it('Should not delete an article',  (done) => {
        chai.request(server)
        .delete('/api/v1/articles/5fc35d4283da6fe0e90e89')
        .end((err, res) => {
            res.should.have.status(500)
            res.body.should.have.property('message')
            done()
        })
    })
})