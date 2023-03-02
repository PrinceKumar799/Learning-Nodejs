const usersDB = {
    users: require('../model/users.json'),
    setUsers: function(data) {
        this.users = data;
    }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bycrypt = require('bcrypt');

const handleNewUser = async(req,res) =>{
    const {user,pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message': 'Username and password are required'});
    //check for duplicate user name in database
    const duplicate = usersDB.users.find(person => person.username === user);
    if(duplicate) return res.sendStatus(409);
    try{
        //encrypt password
        const hashedPwd = await bycrypt.hash(pwd,10);

        //store the new user
        const newUser = {"username":user,"password":hashedPwd};
        usersDB.setUsers([...usersDB.users,newUser]);
        await fsPromises.writeFile(path.join(__dirname,'..','model','users.json'),
        JSON.stringify(usersDB.users));
        console.log(usersDB.users);
        req.status(201).json({'success':`New User ${user} created!`});
    }
    catch(err)
    {
        res.sendStatus(500).json({'message':err.message});
    }
}

module.exports = {handleNewUser};