import server from '../../server';
import chai, {should, expect} from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);


describe('Read all articles', async () => {
    it('Should read all articles', (done) => {
            chai.request(server)
                .get('/api/v1/articles')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.message).to.be.a('string');
                    res.body.should.be.a('object');
                    done();
                });
    })
})