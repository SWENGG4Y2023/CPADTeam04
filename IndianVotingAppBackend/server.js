// server.js
const Datastore = require('nedb');
const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./notificationService');
const cors = require('cors')


const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = new Datastore({ filename: './data/database.db', autoload: true });

app.post('/vote', (req, res) => {
    const { voterID, method, contact } = req.body;

    sendEmail(contact, 'Your vote has been acknowledged.');
    res.send('Vote acknowledged.');
});

app.post('/register', (req, res) => {
    const { name, email, aadhar, mobile, voterid } = req.body;

    const user = {
        name,
        email,
        aadhar,
        mobile,
        voterid,
        voted: false,
        createdAt: new Date()
    };

    // Insert the user into the database
    db.insert(user, (err, newDoc) => {
        if (err) {
            return res.status(500).send('Error storing user information');
        }

        res.status(201).send({ message: 'User information stored successfully', userId: newDoc._id });
    });

});

app.get('/user', (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    // Find the user by email
    db.findOne({ email }, (err, doc) => {
        if (err) {
            return res.status(500).send('Error retrieving user information');
        }

        if (!doc) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(doc);
    });
});

app.get('/party', (req, res) => {
    res.status(200).send({
        party: [
            {
                name: "XYZ",
                leader: "Vaneet Karan"

            },

            {
                name: "ABC",
                leader: "Aadhya Krish"

            }
        ]
    }
    );
});

app.listen(3000, () => console.log('Server running on port 3000'));
