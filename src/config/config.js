import environment from '../../environment';
const envConfig = environment[process.env.NODE_ENV];

module.exports = {

    fotowareUrl : envConfig.fotowareUrl,

};