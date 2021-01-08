require("dotenv/config");
import mongoose from 'mongoose';
const connectoToMongo = () => {
    const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r7fxs.mongodb.net/portfolio?retryWrites=true&w=majority`;
    mongoose.connect(URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log(`Succesfully connected`);
    }).catch(error => {
        console.log(String(error.message));
    });
}
export default connectoToMongo;