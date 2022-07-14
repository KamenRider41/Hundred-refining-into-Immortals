---
sidebarDepth: 2
---
# Flutter环境配置,让doctor一绿到底 :star:
[[TOC]]
# 写在前面
前端，是一个涉猎广泛的职业！不仅仅局限在web页面，我们还需要去写一些手机app,那么，我们就需要去学习`Flutter`或者`React-Native`等技术。

- 安装`Flutter`是件苦活，我在自己摸索的过程遇到了很多bug，过程是比较痛苦的
    - 比如安装好后，但是不能用，那这些会不会堆积下来影响电脑的性能？对追求完美的程序员来说，简直就是`精神折磨`
- 下面就和大家泰勒说说如何配置Flutter环境

## Download Flutter Sdk
- 进入[Flutter官网](https://flutter.dev/)进行下载
    - 点击`Get started`进入到下一个页面
        - 右上角和主页下翻一点都可以找到这个按钮


![744A40AE-AD52-47B2-B555-32B5F40650D9.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96a1e9eb7cee47c982c779e40a3b949f~tplv-k3u1fbpfcp-watermark.image?)
- 点击`macOS`后进行到下载页面
    - `System requirements`写了硬件的要求
    - 下面的`Get the Flutter SDK`就是我们要下载地方了

![5794E854-6292-44C9-B4FA-D44251BC03A6.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f703ef443b746b8b088dcb36afa50ed~tplv-k3u1fbpfcp-watermark.image?)

- 下面完成后,我们新建一个`development`文件夹然后解压到这个文件夹里面

![EC283D2D-EA5A-44C4-AD0B-C200E7399001.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e0157fb88894d658e179015c7991de0~tplv-k3u1fbpfcp-watermark.image?)
## Update Path Variable
- 然后运行下面的命令
```bash
cd ～/development
export PATH="$PATH:`pwd`/flutter/bin"
```
- `echo $SHELL`命令可以知道你现在在用哪个`SHELL`
- 创建`.zshrc`文件
    - `touch .zshrc`
    - 然后我们在文件夹下使用命令`command+shift+.`就可以看到隐藏文件了
- 打开`.zshrc`文件,进行编辑
    - `export PATH="$PATH:[PATH_OF_FLUTTER_GIT_DIRECTORY]/bin"`
        - `[PATH_OF_FLUTTER_GIT_DIRECTORY]`表示`flutter/bin`的文件目录
    - 所以，可能命令会是这样`export PATH="$PATH:/User/41/development/flutter/bin`
    - 注意：不要直接复制上面的命令啊，要用自己的目录去替换！！！
- 使用命令来运行`rc`文件
    - 网上是说`source $HOME/.zshrc`
    - 我是用`source $HOME/development/.zshrc`成功运行的
- 之后使用`Flutter`，成功运行就说明SDK已经没问题了
***
- 运行`flutter doctor`来康康有啥问题，卧槽，大吃一惊

![5E57F287-4355-4AB8-B510-9E9DD010131B.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14409f989fb94aac9c772b2bc98728a9~tplv-k3u1fbpfcp-watermark.image?)

- 还有四个大错
    - `cmdline-tools`
    - `Android license status unknown`
    - `Xcode`
    - `Android Studio`
## Install Xcode
- 在`App Store`搜索`Xcode`直接进行下载安装就可以了
    - 就可以了吗？太天真了
    - 下载完使用`flutter doctor`还是有`Xcode`的报错
- 运行下面的命令来解决这个问题
```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
```
- 现在`Xcode`的问题就正式解决了
## Install Android Studio
- 先去[android studio官网](https://developer.android.com/)下载sdk
    - 点击`下载Android Studio`
    - 点击`Download Android Studio`
    - 有个文档让你看，点已经读了，然后下载对应版本
        - 芯片型号在关于本机中查看

![2599F5D4-8B95-4526-BED9-6352874E9516.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b02963e19db4d81b8b30124a0a9c7d5~tplv-k3u1fbpfcp-watermark.image?)
- 安装到应用中，这样才能解决doctor的问题

![9353ECAA-15BA-469E-80D0-86FE1DF41868.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1db15b3cd0fe48b9ababa3ccf0d994ae~tplv-k3u1fbpfcp-watermark.image?)

- 新版的`Android Studio`长这样
    - 我们在`More Action`中可以找到`SDK Manager`
    - 在这个里面我们可以解决`cmdline-tools`的bug
    - 然后选择下面几个sdk然后apply进行下载，最后点ok就可以了

![53CBED51-7A73-4768-A181-653DA139AF4A.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcd8adce6ee94aebbd2625556586948f~tplv-k3u1fbpfcp-watermark.image?)

## Accept Android Licenses
- 这个问题根据`flutter doctor`的提示运行下面的命令
- `flutter doctor --android-licenses`

# 一绿到底
- 然后我们再次运行`flutter doctor`



![BFB4763D-0456-4A8D-BA1E-98AE0B79B544.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b519783d90f45b095153c9eb19a60b3~tplv-k3u1fbpfcp-watermark.image?)


- bug，不存在的！

