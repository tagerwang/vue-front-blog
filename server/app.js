const path = require('path')
const express = require('express')
const consola = require('consola')
const {Nuxt, Builder} = require('nuxt')
const app = express()
const {writeFileSync} = require('fs')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const start = async () => {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {host, port} = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()

    // 生成一个文件主要给idea做配置用
    writeFileSync(path.join(__dirname, '../webpack.conf.tmp'), `module.exports = ${JSON.stringify({
      resolve: {alias: nuxt.options.alias}
    })}`, {encoding: 'utf8'})
  }

  // public path
  app.use('/', express.static(path.join(__dirname, '../public'), {
    // public下面有个index.html文件 index设置为false
    index: false
  }));

  // spa page
  app.use('/', express.static(path.join(__dirname, '../dist'), {
    // public下面有个index.html文件 index设置为false
    index: false
  }));

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
