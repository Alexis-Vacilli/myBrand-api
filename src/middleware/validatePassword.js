
const validator= (req, res, next)=>{

    const password =req.body.password;
    if(password.length >= 6){
        next()
    }else{
        res.status(500).send({
            message: 'Password length should be atleast 6 characters long'
        })
    }
}
export default validator;