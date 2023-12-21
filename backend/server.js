
const usersDB = {
    users: require('./models/Users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;

const express = require('express');

const app = express();

const cors = require('cors');

const corsOptions = require('./config/corsOption');
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors(corsOptions)); 

app.post('/register/email', (req, res) => { 
   const {email}  = req.body;

   const emailLW = email.toLowerCase();


   const found = usersDB.users.find(user => user.email === emailLW);
console.log(found);
   if(found) res.sendStatus(404);

const newUser = {
    id: Date.now(),
email : emailLW,
password: '',
name: '',
phone : '',
country :  '',

};

const  newUsers = [...usersDB.users, newUser];
usersDB.setUsers(newUsers);

fsPromises.writeFile('./models/Users.json', JSON.stringify(newUsers));

    res.json(newUser.id).status(200);

});


app.listen( 3500 , () => {
    console.log('Server is running on port 3500');
}
)