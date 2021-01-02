import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'request';
import app from '../../server';
import {} from 'dotenv/config';

chai.use(chaiHttp);
const {
    expect
} = chai;
const should = chai.should();
const chaiReq = chai.request(app);



describe('API Root', () => {
    it('should display content', async () => {
        const res = await chaiReq.get('/');
        expect(res.body).to.have.property('message', `Welcome to Alexis Vacilli's API!`);
        expect(res).to.have.status(200);
        expect(res.body).to.not.be.null;
    });
    it('listening on port', async () => {
        const port = process.env.PORT || 5000;
        const res = await chai.request(`http://localhost:${port}`).get('/');
        expect(res).to.have.status(200);
    });
});
