'use strict'
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/**
 * 主要用于 webstorm 识别 alias 配置
 * 设置 Webstorm -> Language -> JavaScript -> Webpack 为本文件路径即可
 */
module.exports = {
  resolve: {
    alias: {
      '@/components': resolve('src/components'),
      '@/common': resolve('src/common'),
      '@/utils': resolve('src/common/utils'),
      '@/pages': resolve('src/pages'),
      '@/package': resolve('package.json'),
      '@/project': resolve('project.config.json'),
      '@/': resolve('src'),
    }
  },
}
