const express = require('express');
const router = express.Router();
var cors = require('cors')
const faker = require('faker');
const user = require('../user');
const db = require('../db/dbApi')


router.use(cors())


/* GET api listing. */
router.get('/', (req, res) => {
  console.log("Invoked default")
  res.redirect("/home");
});


router.get('/getusers', (req, res) => {
  console.log("Invoked get users")
 
  db.query('SELECT json_agg(doc) FROM  user_detail', (err, res1) => {
    console.log(res1.rows[0].json_agg)
    res.send(JSON.stringify(res1.rows[0].json_agg));
  }
  );


})

router.get('/getuser', (req, res) => {
  var username = req.query.username;
  console.log("Invoked get user for username: " + username)
  var querystring = 'select json_agg(doc)  from  user_detail	where doc @> $1';
  var jsonParams = {
    "username": username
  }
  db.query(querystring,
    [JSON.stringify(jsonParams)], (err, res1) => {
      if (err) {
        console.log("Error while executing query " + err);
        res.send(err);
      } else {
        console.log(res1.rows[0].json_agg)
        res.send(JSON.stringify(res1.rows[0].json_agg));
      }
    }
  );

})

router.post('/saveuser', (req, res) => {
  console.log("Invoked saveuser")

  var user = req.body.body;
  console.log(user);

  db.query('INSERT INTO user_detail( doc) VALUES ($1)',
    [user], (err, res1) => {
      console.log(res1)
      res.send(true);
    }
  );

})


router.get('/savefaker', (req, res) => {
  console.log("Invoked savefaker")

  for (i = 0; i < 10; i++) {
    var u = new user.User(faker.internet.userName(), faker.internet.email(), faker.internet.password(),
      faker.name.firstName(), faker.name.lastName(), faker.date.future(), "Unmarried", faker.name.jobArea,
      faker.address.city(), faker.address.country(), faker.phone.phoneNumber(), faker.image.avatar());

    db.query('INSERT INTO user_detail(doc) VALUES ($1)',
      [u], (err, res1) => {
        console.log(res1)
      }
    );

  }

  res.send("Insert Complete");

})


router.get('/truncateusers', (req, res) => {
  console.log("Invoked delete all")

  db.query('truncate user_detail', (err, res1) => {
    console.log(res1)
    res.send("Truncate completed");
  }
  );

})


module.exports = router;