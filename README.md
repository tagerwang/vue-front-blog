# vue-front-blog

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 命令说明：
```
yarn generate // spa静态文件打包到dist
yarn ssrBuild // ssr 打包
yarn pm2 // ssr 文件打包到.nuxt

在阿里云服务器的操作：
目录：/usr/share/nginx/html/nuxt-blog
1. spa模式直接替换dist包。
2. ssr模式直接替换.nuxt包。(因购买的云服配置较低，不能直接打包)
   通过pm2 reload xx重启ssr服务。 
```