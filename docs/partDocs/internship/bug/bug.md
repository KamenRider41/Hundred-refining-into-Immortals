---
sidebarDepth: 0
---
# Bug回忆录 :star:
::: tip 记录人生点点滴滴,Bug诞生到消灭的回忆
记录一下Bug:star::star:
:::
[[TOC]]
## 研发
### 启动端口被占用
```bash
lsof -i tcp:3300  # 查看端口号进程
kill -9 number # number是占用的PID号
```
之后就可以正常启动了
### 改变文件位置后运行报错
- 引入的`less`文件的路径要做修改

### Select组件获取选择value
- 这里不是用`ref`来调用`state`来获得的
- 而是直接`onChange={(value)=>{consolelog(value)}`
### 路由样式冲突
- 发现是`!import`引起的
- 那能不用`!import`吗？
- 开发者工具里面发现了select自带的类名，直接在这个类名添加可以改变
- 同样地发现对于`button`组件
- 不用自己写样式，换`type`就可以了
- 也就可以不用`!import`
- 这样写不好
- 自己的类名+上这个类名比较好！
### 草稿箱路由下，左侧`作品管理`没有亮起
- 在`nav`组件中进行对应的逻辑更改

### 在`mac`和`win`的ts使用方法不太一样
- 在`mac`要用`sudo`
```bash
sudo npm install -g typescript
sudo npm install -g ts-node
sudo npm install -g @types/node
```
- 之后在`vscode`安装`coderunner`插件使用
- 或者ts-node 文件名
### boe环境没有生效
- 关掉代理就可以了
## Vue
### 在vuepress中配置scss
- 版本冲突
```bash
npm install sass --save-dev
npm install sass-loader@7.3.1 --save-dev
```
## Charles
- 忘记开启`SSL proxying`导致没办法本地代理
## Git相关的Bug
### `yarn`和`npm`报错
**详情:无法加载文件 `D:\Program Files\nodejs\node_global\yarn.ps1`，因为在此系统上禁止运行脚本。**
- 原因是系统禁止运行脚本了，但是什么时候禁止的，我都不知道！？
- 解决方案如下：
- 1.`get-ExecutionPolicy`、查看权限
- 2.我们得到输出`Restricted`,说明了问题就是脚本运行收到限制
- 3.`Set-ExecutionPolicy -Scope CurrentUser`设置权限
- 4.设置为`RemoteSigned`权限
- 5.下面就可以成功运行`npm`和`yarn`了

### 安装`brew`报错
**详情：fatal: unable to access 'https://github.com/Homebrew/brew/': LibreSSL SSL_connect:SSL_ERROR_SYSCALL in connection to github.com:443**
- 更换镜像源`/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"`
- 使用其他镜像源

### 使用`flutter -v`报错
- `sudo spctl --master-disable`
- 之后可以使用

### 在`Xcode`添加账号一直失败
- 关掉`charles`代理就可以了...
- 无语