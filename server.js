import {} from 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({
    status: 200,
    message: `Welcome to Alexis Vacilli's API!`
}));

app.listen(process.env.PORT, () => console.log(`app running on port ${process.env.PORT}`));

export default app;