import User from '../models/users';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSignUp =  (req, res) => {
    User.find({email: req.body.email })
     .exec()
     .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'Mail exists'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {   
                if(err) {
                    return res.status(500).json({
                        message: 'Server Error', error: err
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(), 
                        email: req.body.email,
                        password: hash
                    });
                    user
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: 'User created'
                        });  
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({
                            message: 'Server Error', error: err
                        });
                    });
                }
            })
        }
     }) 
}

export default userSignUp;