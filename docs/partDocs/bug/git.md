# Git相关的Bug
## `yarn`和`npm`报错
**详情:无法加载文件 `D:\Program Files\nodejs\node_global\yarn.ps1`，因为在此系统上禁止运行脚本。**
- 原因是系统禁止运行脚本了，但是什么时候禁止的，我都不知道！？
- 解决方案如下：
  - 1.`get-ExecutionPolicy`、查看权限
  - 2.我们得到输出`Restricted`,说明了问题就是脚本运行收到限制
  - 3.`Set-ExecutionPolicy -Scope CurrentUser`设置权限
  - 4.设置为`RemoteSigned`权限
  - 5.下面就可以成功运行`npm`和`yarn`了