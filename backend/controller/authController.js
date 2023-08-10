const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersCollection = require("../model/userModel");


const doSignUp = async (req, res) => {
    try {
        console.log('====================================');
        console.log(".req.body", req.body);
        console.log('====================================');

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(req.body.password, salt)
        console.log('===================="passwordHash================');
        console.log(passwordHash, salt);
        console.log('====================================');
        const user = new usersCollection({
            email: req.body.email,
            passwordHash: passwordHash,
            name: req.body.name,
            
        });
        const result = await user.save()
        console.log("result", result);

        // posts = [...posts, { ...req.body }]
        res.status(200).json({
            message: 'user is sucessfully resgistered!',
            data: {
                email: req.body.email,
                name: req.body.name,
                
            }
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: 'failed',
            error: error,
            data: []
        })
    }

}


const doLogin = async (req, res) => {
    try {

        const userData = await usersCollection.findOne({
            email: req.body.email
        })

        console.log('====================================');
        console.log(req.body, userData);
        console.log('====================================');

        if (!userData.passwordHash) {
            res.status(500).json({
                message: 'email is not found',
                data: []
            })
        }


        const passwordDecode = await bcrypt.compare(req.body.password, userData.passwordHash)
        if (!passwordDecode) {
            res.status(500).json({
                message: 'wrong password',
                data: []
            })
        }


        const token = await jwt.sign({ email: userData.email, name: userData.name }, "qwertyuiopasdfghjklzxcvbnm123456",{expiresIn:'1d'});
      
        console.log('====================================');
        console.log("token", token);
        console.log('====================================');

        res.status(200).json({
           
                role: userData.role,
                message: "success"
           
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: 'failed',
            error: error,
            data: []
        })
    }

}



module.exports = {
    doSignUp,
    doLogin
}