import user from '../models/users'
import server from "../../server";
import chai, { should } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
const { it, describe, beforeEach, afterEach } = mocha;
chai.should();
chai.use(chaiHttp);


const mockUser = {
    email:'alexisvacilli100@gmail.com',
    password: 'alexisvacilli'
}


describe('sign a user', async () => {
    beforeEach(async () => {
        await user.deleteMany({});
      });
    
      afterEach(async () => {
        await user.deleteMany({});
      });
    it('Should create a user', async  () => {
        const res = await chai.request(server).post('/api/v1/signup').send(mockUser)
        res.should.have.status(201)
        res.body.should.have.property('message').eql('User created');
    })

    it('should not create a user who already exists', async () => {
        const mockUser = {
            email:'alexisvacilli100@gmail.com',
            password: 'alexisvacilli'
        }
        const res = await chai.request(server).post('/api/v1/signup').send(mockUser)
        res.should.have.status(201)
        res.body.should.have.property('message').eql('User created');
        const result = await chai.request(server).post('/api/v1/signup').send(mockUser)
        result.should.have.status(409)
        
    })

    it('Should not register with missing credentials', async () => {
        const mockUser = {
            password: 'alexisvacilli'
        }
        const res = await chai.request(server).post('/api/v1/signup').send(mockUser)
        res.should.have.status(500)
        res.body.should.have.property('message').eql('Server Error');
    })

    it('Should not register a user with a passowrd less than 6 characters', async () => {
        const mockUser = {
            email: 'alexisvacilli100@gmail.com',
            password: 'al'
        }
        const res = await chai.request(server).post('/api/v1/signup').send(mockUser)
        res.should.have.status(400)
        res.body.should.have.property('message').eql('Password length should be atleast 6 characters long'); 
    })
})
