import {} from 'dotenv/config';
import express from 'express';
import routes from './src/routes/index';
import connect from './src/config/mongoose';

connect();

const app = express();

app.use(express.json());
app.use('/api/v1/', routes)
app.get('/', (req, res) => res.status(200).send({
    status: 200,
    message: `Welcome to Alexis Vacilli's API!`
}));

app.listen(process.env.PORT, () => console.log(`app running on port ${process.env.PORT}`));

export default app;