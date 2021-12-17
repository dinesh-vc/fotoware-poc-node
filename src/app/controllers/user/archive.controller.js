var axios = require('axios');
import statusCode from '../../../utils/statusCode'
import config from '../../../config/config'


export default class archiveController {

    static async getArchives(req, res) {
        try {
            var request = {
                method: 'get',
                url: `${config.fotowareUrl}/fotoweb/archives/?q=${req.query.q}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cookie': req.headers.cookie,
                    'Authorization' : req.headers.authorization,
                    'Accept': 'application/json'
                },
        
            };
            axios(request)
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
    static async getArchivesById(req, res) {
        try {
            var request = {
                method: 'get',
                url: `${config.fotowareUrl}/fotoweb/archives/${req.params.id}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cookie': req.headers.cookie,
                    'Authorization' : req.headers.authorization,
                    'Accept': 'application/json'
                },
        
            };
            axios(request)
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