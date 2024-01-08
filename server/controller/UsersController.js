const User = require('../model/UserModel');



exports.login = async (req, res) => {
    const userName = req.body.userName;
    const passward = req.body.passward;

    if(!userName || !passward){
        return res.json({
            msg : "User or Password uncorrect",
            state : 0,
            data : [],
        })
    }

    const user = await User.findOne({
        userName : userName,
    })

    if(!user){
        return res.json({
            msg : "User Not Found",
            state : 0,
            data : [],
        })
    }

    if(passward === user.passward){
        return res.json({
            msg : `Welcome Back ${userName}`,
            state : 1,
            data : user,
        })
    }else{
        res.json({
            msg : "Password uncorrect!. Try Again",
            state : 0,
            data : [],
        })
    }
}




exports.register = async (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const phone = req.body.phone;
    const passward = req.body.passward;

    if(!userName || !email || !phone || !passward){
        return res.json({
            msg : "User or Password uncorrect",
            state : 0,
            data : [],
        })
    }

    const user = await User.findOne({
        $or : [
            {userName : userName,},
            {email : email,}
        ],
    })

    if(user){
        return res.json({
            msg : "user already Exists!",
            state : 0,
            data : [],
        })
    }

    await User.create({
        userName : userName,
        passward : passward,
        email : email,
        phone : phone,
    }).then((data)=>{
        res.json({
            msg : "Account Created Successfully!",
            state : 1,
            data : data,
        })
    }).catch((err)=>{
        console.log(err);
        res.json({
            msg : "faild to Register. INTERNAL SERVER ERROR",
            state : 0,
            data : [],
        })
    })

}