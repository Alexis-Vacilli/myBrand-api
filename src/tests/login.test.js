import server from '../../server';
import chai, {should} from 'chai';
import chaiHttp from 'chai-http';
import mocha from 'mocha';

const {it} = mocha;
chai.should();
chai.use(chaiHttp);

const mockUser = {
    email:"alexisvacilli10@gmail.com",
    password:"alexis"
};

describe('Login a user', async () => {
    it('Login a user', async () => {
        const res = await chai.request(server).post('/api/v1/login').send(mockUser);
        res.should.have.status(200);
        res.should.have.property('message', 'Auth successful')
    });
    it('should not login', async () => {
        const mockuser = {
            email:'alexisvacilli10@gmail.com',
            password: 'alexi'
        }
        const res = await chai.request(server).post('/api/v1/login').send(mockuser)
        res.should.have.status(401)
    })

    it('server error', async () => {
        const res = await chai.request(server).post('/api/v1/login').send()
        res.should.have.status(500)
    })
});