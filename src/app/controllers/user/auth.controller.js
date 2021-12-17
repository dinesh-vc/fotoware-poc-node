
var axios = require('axios');
var qs = require('qs');
import statusCode from '../../../utils/statusCode'
import config from '../../../config/config'

export default class userAuthController {
    
    static async generateToken(req, res) {
        try {
            const grant_type = req.body.grant_type;
            const client_id = req.body.client_id;
            const client_secret = req.body.client_secret

            var data = qs.stringify({
                'grant_type':grant_type ,
                'client_id': client_id,
                'client_secret': client_secret
            });

            var config = {
                method: 'post',
                url:`${config.fotowareUrl}/fotoweb/oauth2/token`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cookie': req.headers.cookie
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    res.status(statusCode.OK).send(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    res.send(error);
                });
        } catch (e) {

            console.log("error :---", e)

            res.status(status_codes.INTERNAL_SERVER_ERROR).send(Response.sendResponse(status_codes.INTERNAL_SERVER_ERROR, custom_message.errorMessage.genericError, [], e));
        }
    }
}