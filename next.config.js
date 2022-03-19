const basePath = `/${require('./package.json').name}`;

module.exports = process.env.NODE_ENV !== 'development' ? {
    basePath: basePath,
    assetPrefix: basePath
} : {};