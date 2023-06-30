const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio_vue_1" : "/",
  transpileDependencies: true
})
