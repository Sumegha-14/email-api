# EMAIL API
An API for use by [SYED SALIF MOIN](https://github.com/salif-04) in his [Portfolio](https://salif-04.github.io/). It uses [EmailJS](https://www.emailjs.com/) services for sending email.

## Endpoints

![POST /email](https://img.shields.io/static/v1?label=POST&message=%2Femail&colorB=00cc00&style=flat-square)
- This endpoint sends email to [SYED SALIF MOIN](https://github.com/salif-04)

#### Parameters
| Feild        | Description                        | Required |
| :----------- | :--------------------------------- | :------- |
| from_email   | The Email ID of the Sender         | True     |
| from_name    | The Name of the Sender             | True     |
| subject      | The Subject of the Email           | True     |
| message_html | The Body/Message of the Email      | True     |
| address      | The Address of the Sender          | True     |
| phone        | The Contact Number of the Sender   | True     |

#### Response
| Status Code | Message                  | Reason                                                         |
| :--         | :----------------------- | :------------------------------------------------------------- |
| 200         | Email Sent               | Email is sent successfully                                     |
| 402         | Data is not defined      | One or More of the required/essential parameter is/are missing |
| 401         | Error in sending request | Timeout Occured                                                |

## Installation Guide
- git clone https://github.com/salif-04/email-api.git
- cd email-api
- touch .env
- Get SERVICE_ID, TEMPLATE_ID and USER_ID from [EmailJS](https://www.emailjs.com/) and add them to .env
- npm install
- npm start