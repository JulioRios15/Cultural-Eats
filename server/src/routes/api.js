//const express = require('express');
const router = require('express').Router();

//const router = express.Router();

const User = require('../Models/User');


router.get('/', (req, res) => {
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch(error => {
      console.log('ERROR IN BACKEND', error)
    })

});

router.post('/save', (req, res) => {
  const data = req.body;
  const newUser = new User(data);
  newUser.save((error) => {
    if (error) res.status(500).json({ msg: 'Internal server error' })
    else {
      res.json({
        msg: 'data recieved'
      })
    }
  });

})

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'))
})

router.delete('/delete/:id/:userId', (req, res) => {
  const { id, userId } = req.params;
  User.findOneAndRemove({ "usrId": userId, "recipieId": id })
    .then(data => {
      data.remove(err => {
        if (err) res.status(500).send({ msg: 'Error deleting the recipe.' })
        res.status(200).send({ msg: 'recipe deleted.' })
      })
    })

})



module.exports = router;