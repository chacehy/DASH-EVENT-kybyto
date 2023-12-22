
const usersDB = {
    users: require('./models/Users.json'),
    setUsers: function (data) { this.users = data }
}

const {emailSending} = require('./controllers/emailSending')

const fsPromises = require('fs').promises;

const express = require('express');
const app = express();

const cors = require('cors');

const corsOptions = require('./config/corsOption');

app.use(express.json());

app.use(cors(corsOptions)); 

app.post('/register/email', (req, res) => { 
   const {email}  = req.body;
   const emailLW = email.toLowerCase();
   const found = usersDB.users.find(user => user.email === emailLW);
if(found) res.sendStatus(404);
const id = Date.now();
res.json(id).status(200);

});

app.post('/register' , (req,res) => {
    const data = req.body;

    const found = usersDB.users.find((user) => user.email == data.email && user.phone == data.phone );

    if(found) res.sendStatus(409);

    const newUsers = [...usersDB.users , data];

    usersDB.setUsers(newUsers);

    fsPromises.writeFile('./models/Users.json' , JSON.stringify(usersDB.users));

    console.log('FILE CHANGED');
    
   emailSending(data.name , data.email)
    res.sendStatus(200);

})



app.listen( 3500 , () => {
    console.log('Server is running on port 3500');
}
)