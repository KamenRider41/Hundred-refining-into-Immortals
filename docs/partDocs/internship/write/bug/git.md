---
sidebarDepth: 0
---
# Git相关的Bug
[[TOC]]
## `yarn`和`npm`报错
**详情:无法加载文件 `D:\Program Files\nodejs\node_global\yarn.ps1`，因为在此系统上禁止运行脚本。**
- 原因是系统禁止运行脚本了，但是什么时候禁止的，我都不知道！？
- 解决方案如下：
- 1.`get-ExecutionPolicy`、查看权限
- 2.我们得到输出`Restricted`,说明了问题就是脚本运行收到限制
- 3.`Set-ExecutionPolicy -Scope CurrentUser`设置权限
- 4.设置为`RemoteSigned`权限
- 5.下面就可以成功运行`npm`和`yarn`了

## 安装`brew`报错
**详情：fatal: unable to access 'https://github.com/Homebrew/brew/': LibreSSL SSL_connect:SSL_ERROR_SYSCALL in connection to github.com:443**
- 更换镜像源`/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"`
- 使用其他镜像源
## mac乱七八糟的无法打开
- 在安全性与隐私中更改
- 或者运行`sudo spctl --master-disable`
## master新增,导致现在分支无法提mr
- 先用一条命令来抑制消息
- `git config pull.rebase false` # 合并
- `git config pull.rebase true` # 变基
- `git config pull.ff only` # 仅快进
- 然后执行`git pull origin master`
- 这样就可以拉取`master`的新变化了
- 之后解决冲突可能还有错误
- `git commit -m 'message' --no-verify`

## `git pull`失败
- 我直接`git pull --rebase origin 某分支`
