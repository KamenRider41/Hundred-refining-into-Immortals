---
sidebarDepth: 0
---
# 研发
[[TOC]]
## 启动端口被占用
```bash
lsof -i tcp:3300  # 查看端口号进程
kill -9 number # number是占用的PID号
```
之后就可以正常启动了
## 改变文件位置后运行报错
- 引入的`less`文件的路径要做修改

## Select组件获取选择value
- 这里不是用`ref`来调用`state`来获得的
- 而是直接`onChange={(value)=>{consolelog(value)}`
## 路由样式冲突
- 发现是`!import`引起的
- 那能不用`!import`吗？
- 开发者工具里面发现了select自带的类名，直接在这个类名添加可以改变
- 同样地发现对于`button`组件
- 不用自己写样式，换`type`就可以了
- 也就可以不用`!import`
- 这样写不好
- 自己的类名+上这个类名比较好！
## 草稿箱路由下，左侧`作品管理`没有亮起
- 在`nav`组件中进行对应的逻辑更改

## 在`mac`和`win`的ts使用方法不太一样
- 在`mac`要用`sudo`
```bash
sudo npm install -g typescript
sudo npm install -g ts-node
sudo npm install -g @types/node
```
- 之后在`vscode`安装`coderunner`插件使用
- 或者ts-node 文件名
## boe环境没有生效
- 关掉代理就可以了

## select组件自动换行
- 之前使用flex布局发现没用
- 所以比较奇怪
- 最后发现这个组件忘记引入`index.less`
- 而父组件又有些样式看似好像是有改变的，所以没有察觉到

## placeholder无法改变颜色和居中

## 使用setState后数值还没有更新
- 现在是直接使用设置的值，马上使用可能还没有更新
## 在修改了一些接口定义后，引发了按钮bug
- 接口定义的参数变了，输入参数忘记改变
## 数组为空的默认为全部，全部选了不能选其他，选其他的了不能选全部的逻辑
- 在第一次进入的时候插入一个特殊的数据,这个作为全部的标志
- 这样不用后端提供，也能完成这个标签的展示
## 察觉接口的微小变化

## 给整个div添加点击事件后，div中的图标click事件会触发两次
- 给点击事件添加`preventDefault(e)`就可以了
## select组件选择不高亮了
- 原因是给定的`value`和`option`指定的`value`类型不一致
- 在对象取`value`的时候类型会变成`String`
  - 或者来初始化的时候使用`value:+value`来转换一下类型
## 访问跨域
- 其实也不是这个问题
- 包的版本更新了，重新`npm i`一下就可以了

## select组件控制变量进行接口访问
- 要注意一些跳转点
  - 比如切换`state`,`pageIndex`变成1
## 首页白屏背刺
- 注意初始化要兜底`|[]`
- 调用要稳重`?.`
## 没有注意部署的环境，ppe和boe混淆

## 暗号参数类型左右横跳