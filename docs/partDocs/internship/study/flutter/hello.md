---
sidebarDepth: 0
---
# 小荷才露尖尖角,和Flutter应用说你好

今天,我们就来一起阅读一下`Flutter`项目初始化后的代码！

[[TOC]]
## 创建应用

*   通过`AS`创建一个新的`Flutter`工程,我们会得到一个默认的计数器应用示例

*   项目的`dart`代码主要在`lib/main.dart`中

```Dart
class MyApp extends StatelessWidget {@overrideWidget build(BuildContext context) {return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,),
      home: MyHomePage(title: 'Flutter Demo Home Page'),);}
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
```

## 代码分析

### 1.导入包

```Dart
import 'package:flutter/material.dart';
```

后面使用的一些`widget`就是从这里来的，所以可以理解为一个`UI 组件库`。



### 2.应用入口

```Dart
void main() => runApp(MyApp());
```

*   与大多数语言是一样的，`Flutter`或者说`dart`是`main`函数为应用程序的入口的。`main`函数中调用的`runApp`方法，它的功能是启动`Flutter`应用。`runApp`它接受一个`Widget`参数

*   怎么去理解这个`Widget`参数呢？

    *   就当它是一个组件的别称就好了

    

    *   或者说对于这个入口,是和`App.jsx`，`App.vue`很类似的一个东西

*   `main`函数使用了`js`中的匿名函数写法，这种简写比较潇洒

### 3.应用结构

```Dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      //应用名称  
      title: 'Flutter Demo', 
      theme: ThemeData(
        //蓝色主题  
        primarySwatch: Colors.blue,
      ),
      //应用首页路由  
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
```

*   `MyApp`类代表`Flutter`应用，它继承了`StatelessWidget`类，那么，它作为子类就是一个`StatelessWidget`类呗

    *   那么简单来说，所有的Widget都分为两类

        *   `StatelessWidget`

        

        *   `StatefulWidget`

    

    *   其实就是`React`中的受控组件和非受控组件

        *   一下就通透了是不

    

    *   那么,如果类比`Vue`

        *   对于`Vue2`

            *   传入`props`来控制就是受控了

            

            *   内部的数据有变化都可以理解为受控,并不需要像`React`去`setState`或者调用`useStata`去更新

        

        *   对于`Vue3`

            *   内部数据使用`ref`和`reactive`包裹的是受控组件

*   在`Flutter`中,几乎都是`widget`,包括一些`css`的样式都是以`widget`的形式提供的

    *   感觉样式写起来没有纯`css`快啊

    

    *   但是仔细一想，这样代码读起来对新手比较友好了

    

    *   对新手来说，`Flutter`的样式控制应该更加容易理解

*   `Flutter`在构建页面时,会调用组件的`build`方法,`widget`的主要工作是提供一个`build()`方法

    *   这个方法就是如何构建这个`widge`组件

*   `MaterialApp`是`Material库`中提供的一个常用的基础的`Widget`，通过它可以设置应用的名称,主题,语言,首页及路由列表等。

*   `home`是应用的首页,它也是一个什么啊？

    *   `widget`



## 首页

### 1.初识Widget

```Dart
class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;
  
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
 ...
}
```

*   接着上面继续看,我们App的首页home的这个widget也就是MyHomePage它是一个受控组件！

*   下面细说一下两者

    *   1.受控,非受控，有状态，无状态就不多说了，简单来说就是是否是响应式的，能不能变化

    

    *   2.重点：`Stateful widget`至少由两个类组成:

        *   `StatefulWidget`类

        

        *   `State`类，`StateWidget`类本身是不变的,但是`State`类中持有的状态在`widget`生命周期中可能会发生变化

### 2.\_MyHomePageState类是MyHomePage类对应的状态类。

*   &#x20;比较奇怪的一点

    *   `MyHomePage`类中没有`build`方法，这个前面说的每个`widget`都有一个build方法好像不同

    

    *   这个方法被移动到了`\_MyHomePageState`方法中

    

    *   下面就让我们看看状态类吧

### 3.State类

#### a.\_MyHomePageState类解析

下面，我们来康康这个类里面包含了那些东西吧！

*   组件的状态&#x20;

比如这个初始化项目是一个计数器，所以状态就是一个`count`

```Dart
int _counter = 0; //用于记录按钮点击的总次数
```

*   设置状态的自增函数

```Dart
void _incrementCounter() {
    setState(() {
        _counter++;
    });
}
```

当按钮点击，就调用这个函数，改变状态会使用`setState`方法，这个和`React`的类组件汇总改变状态的方式很像

*   听说`Flutter`对这个方法做了优化，不需要去修改每个`widget`，源码还没有了解过

*   构建`UI`界面的`build`方法

    *   当`MyHomePage`第一次创建时，`\_MyHomePageState`类也会被创建，当初始化完成后,`Flutter`框架会调用`widget`的`build`方法来构建`widget`树

        *   这个和`cssdom`树，渲染树一个道理吧

```Dart
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: Text(widget.title),
    ),
    body: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text('You have pushed the button this many times:'),
          Text(
            '$_counter',
            style: Theme.of(context).textTheme.headline4,
          ),
        ],
      ),
    ),
    floatingActionButton: FloatingActionButton(
      onPressed: _incrementCounter,
      tooltip: 'Increment',
      child: Icon(Icons.add),
    ), 
  );
}
```

*   `Scaffold`是`Material库`中提供的页面脚手架,它提供了默认的导航栏,标题和包含主屏幕`widget树`的`body`属性。路由默认都是通过`Scaffold`创建

*   body的组件树

    *   其中包含了一个`Center`组件,它可以将子组件移动到屏幕中心

        *   真的就是css语义化了

    

    *   `Center`自组件是一个`Column组件`，它可以将所有自组件沿屏幕垂直方向依次排列

        *   子组件a.Text,显示固定文本

        

        *   子组件b.Text,显示`\_counter`状态的数值

*   `floatingActionButton`是页面右下角的带`+`的按钮，它的`onPressed`属性接受一个回调函数，就是`onClick`，呵呵

*   所以逻辑是这样

    *   点击按钮，调用自增函数

    

    *   `setState`引起页面变化`rebuild`达到有状态！！！

#### b.为啥build方法放在State中呢？

*   分而治之，`state`自治提高效率

    *   状态访问方便

    

    *   如果放在`StatefulWidget`，那需要把`state`传进入，就变得麻烦了

        *   或者把`state`状态公开，但是这样就很`danger`了

*   轻轻地来，轻轻地走

    *   如果`build`放在里面，会给继承带来麻烦

        *   会出现多个`build`

        

        *   一山不容二虎啊，会打架
