var axios = require('axios');
var qs = require('qs');
import statusCode from '../../../utils/statusCode'
import config from '../../../config/config'


export default class albumController {

    static async getAlbums(req, res) {
        try {
            var request = {
                method: 'get',
                url: `${config.fotowareUrl}/fotoweb/me/albums/?q=${req.query.q}`,
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
    static async getMyAlbums(req, res) {
        try {
            
            var request = {
                method: 'get',
                url: `${config.fotowareUrl}/fotoweb/me/albums/mine`,
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
    static async getSharedWithMeAlbums(req, res) {
        try {
            
            var request = {
                method: 'get',
                url: `${config.fotowareUrl}/fotoweb/me/albums/shared-with-me/`,
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
    static async getArchivedAlbums(req, res) {
        try {
            
            var request = {
                method: 'get',
                url: `${config.fotowareUrl}/fotoweb/me/albums/archived/`,
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
    static async getDeletedAlbums(req, res) {
        try {
            
            var request = {
                method: 'get',
                url: `${config.fotowareUrl}/fotoweb/me/albums/deleted/`,
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
    static async getContributeAlbums(req, res) {
        try {

            var request = {
                method: 'get',
                url: `${config.fotowareUrl}/fotoweb/me/albums/contribute/`,
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