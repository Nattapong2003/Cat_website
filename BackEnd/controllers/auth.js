const {db} = require('../db');
const bcrypt = require('bcrypt');


const register = (req,res) => {
    const q = "SELECT * FROM users WHERE email = ? OR name = ?"

    db.query(q,[req.body.email,req.body.name], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`name`,`email`,`password`) VALUES (?)";
        const values = [req.body.name, req.body.email, hash];

        db.query(q,[values], (err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created.");
        });
    });
};

const login = (req,res) => {

}

const logout = (req,res) => {

}

module.exports = { register, login, logout };