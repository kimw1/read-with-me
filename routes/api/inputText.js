const router = require("express").Router();


router.post('/save', (req, res) => {
    console.log(req.body.data);
    //Here we create a new entry in the database
});



module.exports = router;
