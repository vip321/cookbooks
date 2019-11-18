const path = require('path')
const { override, fixBabelImports, setWebpackPublicPath, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    "assets": path.resolve(__dirname, './src/assets/'),
    "components": path.resolve(__dirname, './src/components/'),
    "utils": path.resolve(__dirname, './src/utils/'),
    "pages": path.resolve(__dirname, './src/pages/')
  }),

  addDecoratorsLegacy(),

  setWebpackPublicPath('http://activate.navicat.com:8848')



);