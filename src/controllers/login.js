import User from '../models/users';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const login =  (req, res) => {
    User.findOne( {email: req.body.email} )
    .exec()
    .then(user => {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                const token=jwt.sign({
                    email:user.email,
                    userId:user._id
                },process.env.jwt_key,
                {
                    expiresIn:'1h'
                })
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
            }
            res.status(401).json({
                message: 'Auth failed'
            });
        });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Server error', error: err
        })
    })
}

export default login;