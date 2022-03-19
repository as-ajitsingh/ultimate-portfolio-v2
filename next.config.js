const basePath = `/${require('./package.json').name}`;

const skipBasePathNodeEnvironments = ['development', 'production'];
const basePathAppEnvironments = ['github-pages'];

module.exports = skipBasePathNodeEnvironments.includes(process.env.NODE_ENV) && !basePathAppEnvironments.includes(process.env.APP_ENV)
    ? {}
    : {
        basePath: basePath,
        assetPrefix: basePath
    };