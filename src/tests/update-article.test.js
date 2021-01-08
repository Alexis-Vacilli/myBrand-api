import server from '../../server';
import chai, {should, expect} from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

describe('Update article', async () => {
    it('Should update an article', (done) => {
        chai.request(server)
        .patch('/api/v1/articles/5fc3483679c700b9a7caf58c')
        .end((err, res) => {
            res.should.have.status(201)
            res.body.should.property('message').eql('Article updated')
            done()
        })
    })
    it('Should not update an article when there is not a valid ID', (done) => {
        chai.request(server)
        .patch('/api/v1/articles/5fc3483679c700b9a7caf5')
        .end((err, res) => {
            res.should.have.status(500)
            res.body.should.property('message')
            done()
        })
    })
})