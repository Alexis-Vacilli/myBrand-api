import server from '../../server';
import chai, {should, expect} from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);


describe('Read article details', async () => {
    it('Should fetch a single article',  (done) => {
        chai.request(server)
        .get('/api/v1/articles/5ff605bca36116407a513570')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.have.property('message').eql('Successfully fetched an article')
            done()
        })
    } )

    it('Should not fetch a single article when is not valid', (done) => {
        chai.request(server)
        .get('/api/v1/articles/5ff605bca36116407a5135')
        .end((err, res) => {
            res.should.have.status(500)
            res.body.should.have.property('message')
            done()
        })
    })

})