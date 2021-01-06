import server from '../../server';
import chai, {should} from 'chai';
import chaiHttp from 'chai-http';
import mocha from 'mocha';

chai.should();
chai.use(chaiHttp);

const article = {
    title: 'Web technologies',
    description: 'whatever'
}

describe('Create article', async() => {
    it('Should create an article', async() => {
        const res = await chai.request(server).post('/api/v1/articles').send(article);
        res.should.have.status(201);
        res.body.should.have.property('message').eql('Created article successfully');
    })
})