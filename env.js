const appRootPath = require('app-root-path');
const fileExists = require('file-exists');
const env = require('node-env-file');

const get = () => {
    const envFileLocation = appRootPath + '/.env';
    if(fileExists(envFileLocation)){
        env(envFileLocation);
    }
    else{
        throw Error('env file not found');
    }
};

module.exports = {
    get
};