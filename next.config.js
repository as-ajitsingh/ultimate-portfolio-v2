const basePath = `/${require('./package.json').name}`;

const skipBasePathEnvironments = ['development', 'production'];

module.exports = skipBasePathEnvironments.includes(process.env.NODE_ENV) ? {} : {
    basePath: basePath,
    assetPrefix: basePath
};