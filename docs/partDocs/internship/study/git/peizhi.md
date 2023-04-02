---
siderbarDepth : 0
---

# Git配置 :star:
::: tip 粮草先行
无论学习什么，我们都要先配置，让它能够运行。否则其他的都是纸老虎，上不了台面！
:::
[[toc]]
## 安装git
- 下载`brew`,使用国内镜像源`/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"`
  - 主要这个进去后本体和国内要下载两次，**要输入两次序号(提示为1，5)**
  - 亲测有效
  - `brew -v`返回brew版本号
- `brew install git`下载`git`
  - 还可以用`Xcode`安装，这里没有实践，所以不多说了
  - `git --version`可以查看git版本号，有结果说明安装成功
## 配置git
- 配置账号
```bash
git config --global user.email 用户名@bytedance.com    # 字节邮箱
git config --global user.name 用户名
```
- 使用ssh协议生成私钥公钥，并将公钥绑定到`gitlab`上
```bash
#1）生成密钥，一路回车、用默认选项 --- 密码为空呗
ssh-keygen -t rsa              

#2）复制到粘贴板
cat ~/.ssh/id_rsa.pub | clip    # Windows
cat ~/.ssh/id_rsa.pub | pbcopy  # MacOS
```
- 接下来到`github`或者`gitlab`绑定，这个操作就很常规了
  - 头像-setting- SSH keys
  - 把上一步复制的粘贴进去即可！
