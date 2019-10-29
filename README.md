# EMAIL API
An API for use by [SYED SALIF MOIN](https://github.com/salif-04) in his [Portfolio](https://salif-04.github.io/).

## Endpoints

### POST /email
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