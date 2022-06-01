---
sidebarDepth: 0
---
# Charles学习笔记 :star:
::: tip 代理神器！
大项目的代理可不是配一下webpack能解决的！！！
:::
[[TOC]]
## 安装
- 官网下载
- `Charlers`激活
  - help->register
## 配置根证书
- 1.配置电脑端根证书
  - Help->SSL Proxying -> install Charles Root Certificate
    - 点击证书，始终信任
- 2.手机端配置根证书
  - 目前可能不会用到，先略
## 配置抓取策略
- 1.设置白名单
  - Proxy -> Recording Settings
- 2.设置需要抓取HTTPS请求的域名
  - 虽然在手机上安装了证书，Charles也不会主动抓取HTTPS的请求，需要把域名配置到SSL的设置里
    - Proxy -> SSL Proxying Settings -> SSL Proxyingjun
## 本地配置到boe上(使用)
- 在`Tools->Map Remote`上进行配置即可
- 记得勾选`Enable Map Remote`