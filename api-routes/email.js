// require modules
const requests = require('request')
const express = require('express');

// create a router
const router = express.Router();

// handles get post request
router.post('/', (req, res, next)=> {

    console.log(req.headers.host);

    // check if all parameters are set
    if (!(req.body.from_name && req.body.from_email && req.body.subject && req.body.message_html && req.body.address && req.body.phone)) {
        const error = new Error('Data is not defined');
        error.status = 402;
        next(error);
    }
    else {
        // data forEmailJS
        const data = {
            service_id: 'gmail',
            template_id: 'template_zylCtdL2',
            user_id: process.env.USER_ID,
            template_params: {
                'to_name': 'SYED SALIF MOIN',
                'from_name': req.body.from_name,
                'from_email': req.body.from_email,
                'subject': req.body.subject,
                'message_html': req.body.message_html,
                'address': req.body.address,
                'phone': req.body.phone
            }
        };

        // Make https request to EmailJS to send the mail
        requests.post({uri: 'https://api.emailjs.com/api/v1.0/email/send', json: data},
            (err, response, body) => {

                if(err) { // error in sending POST request
                    const error = new Error('Error in sending request');
                    error.status = 401;
                    next(error);
                }
                else { // on successfull POST request
                    if(response.statusCode === 200) { // when email is send successfully
                        res.status(200).json({
                            status: 200,
                            message:"Email Sent"
                        });
                    }
                    else if (response.statusCode === 400) { // when User ID in not included in POST request
                        const error = new Error('User ID must be included');
                        error.status = 400;
                        next(error);
                    }
                    else { // other error
                        const error = new Error('Unknown Error');
                        error.status = 500;
                        next(error);
                    }
                }
            })
    }
})

module.exports = router;