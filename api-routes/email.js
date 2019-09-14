// require modules
const express = require('express');

// create a router
const router = express.Router();

// handles get post request
router.post('/', (req, res, next)=> {
    console.log(req.headers.host);
    res.status(200).json({
        message: "OK"
    });
})

module.exports = router;