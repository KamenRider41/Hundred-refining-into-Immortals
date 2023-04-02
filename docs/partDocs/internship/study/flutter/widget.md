---
sidebarDepth: 0
---
# Widget是一切,Widget简介

[[TOC]]

# 写在前面

作为一个初学者,好像什么都不懂哦！

但是，我感觉`Widget`已经深深地刻入了我的心中，因为它在`Flutter`代码中真的是随处可见！

我百度了一番，翻译是`小装置`，真的是很可爱了！

所以，庞大的`Flutter`就好像一个变形金刚，是组装起来的。

***

说正经的，`Flutter`中的`Widget`的概念是非常广泛的，它不仅是ui元素，也可以是一些功能性的组件：比如手势检测的`GestrueDetector`，用于`APP`主题数据传递的`Theme`等等。




万物皆是`小装置`，今天就和大家一起学习一下`小装置`---`Widget`




# Widget接口，代码不愁

为了更好地认识`Widget`接口，我们从代码来认识一下接口吧

```java
@immutable
abstract class Widget extends DiagnosticableTree {
  const Widget({ this.key });

  final Key? key;

  @protected
  @factory
  Element createElement();

  @override
  String toStringShort() {
    final String type = objectRuntimeType(this, 'Widget');
    return key == null ? type : '$type-$key';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.defaultDiagnosticsTreeStyle = DiagnosticsTreeStyle.dense;
  }
  @override
  @nonVirtual
  bool operator ==(Object other) => super == other;

  @override
  @nonVirtual
  int get hashCode => super.hashCode;

  static bool canUpdate(Widget oldWidget, Widget newWidget) {
    return oldWidget.runtimeType == newWidget.runtimeType
        && oldWidget.key == newWidget.key;
  }
  ...
}
```

-   `@immutable`代表`Widget`是不可变的,这会限制`Widget`中定义的属性必须是不可变的(final)

    -   为什么不允许定义的属性变化呢？

        -   属性发生变化会重新构建`Widget`树，所以`Widget`中定义的属性必须是final

<!---->

-   `Widget`类继承自`DiagnosticableTree`，它是诊断树

    -   它可以提供调试信息

<!---->

-   `Key`这个属性可以类比

    -   React/Vue中list中的key，`Flutter`中也有类似`diff`算法的东西
    -   决定下一次`build`时是否复用`widget`

<!---->

-   `createElement()`--- 很少用到，不解释了

    -   不是，每次都会用，但不用去重写

<!---->

-   `debugFillProperties(...)`复写父类的方法，主要是设置诊断树的一些特性

<!---->

-   `canUpdate(...)`是一个静态方法，它主要用于在`widget`树重新`build`时复用`widget`

    -   这个感觉和`key`有些关系

***

-   另外，`Widget`类本身是一个抽象类

    -   说实话和`c++`感觉很像呢
    -   最核心的是定义了`createElement()`接口

<!---->

-   我们一般来继承`StatelessWidget`和`StatefulWidget`来间接继承`widget`类

# Flutter有四棵树，你需要记住

-   简单介绍一下布局，绘制的处理流程：

    -   1.根据 `Widget`树生成一个`Element`树，`Element`树中的节点都继承自`Element`类
    -   2.根据`Element`树生成`Render`树，渲染树中的节点都继承自`RenderObject`类
    -   3.根据渲染树生成`Layer`树，然后上屏显示，`Layer`树中的节点都继承自`Layer`类

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26d6a38a0ed24a579ef2f1e72f8e5188~tplv-k3u1fbpfcp-zoom-1.image)

-   如果`Container`设置了背景色,`Container`内部会创建一个新的`ColoredBox`来填充背景

<!---->

-   `image`内部会通过`RawImage`来渲染图片

<!---->

-   `text`内部会通过`RichText`来渲染文本

***

-   个人感觉,Element树就是一个中间代理

# StatelessWidget

## 1.简介

无状态装置，听起来没什么实力啊！让我们康康吧！

-   相对于有状态装置是相对比较简单的，它继承自`widget`类，重写了`createElement()`方法:

```java
@override
StatelessElement createElement() => StatelessElement(this);
```

-   `StatelessWidget`用于不需要维护状态的场景，它通常在`build`方法中通过嵌套其它 widget 来构建UI，康一个例子：

```java
class Echo extends StatelessWidget  {
  const Echo({
    Key? key,
    required this.text,
    this.backgroundColor = Colors.grey, //默认为灰色
  }):super(key:key);

  final String text;
  final Color backgroundColor;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        color: backgroundColor,
        child: Text(text,
          style: const TextStyle(
            fontSize: 30,
            color:Colors.black, // 默认red，太吊了
            decoration:TextDecoration.none // 默认yellow下划线，太吊了
),
        ),
      ),
    );
  }
}
```

-   很简单可以看出来，这个组件就是可以输入背景色和文本，然后是居中显示的

<!---->

-   我们来使用它

```java
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // home: const MyHomePage(title: 'Flutter Demo Home Page'),
      home: const Echo(text: "hello world")
    );
  }
}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14b7ecb00e3c489196fdd8e42a5e13f0~tplv-k3u1fbpfcp-zoom-1.image)

-   ## 2.Context
-   -   `build`方法有一个`context`参数，它是`BuildContext`类的一个实例

        -   表示当前`widget`在`widget`树中的上下文

        -   每一个`widget`都会对应一个`contex`对象

        -   实际上，`context`是当前`widget`在`widget`树中位置中执行相关操作的一个泳道

            -   有点像boe，哈哈

    -   我们来看一个子widget获取父widget的代码例子：

        -   这里例子单独跑好像还有点问题
        -   在`StatefulWidget-2.a`有成功的例子

```java
class ContextRoute extends StatelessWidget  {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Context测试"),
      ),
      body: Container(
        child: Builder(builder: (context) {
          // 在 widget 树中向上查找最近的父级`Scaffold`  widget 
          Scaffold scaffold = context.findAncestorWidgetOfExactType<Scaffold>();
          // 直接返回 AppBar的title， 此处实际上是Text("Context测试")
          return (scaffold.appBar as AppBar).title;
        }),
      ),
    );
  }
}
```



# StatefulWidget

-   和`StatelessWidget`一样，`StatefulWidget`也是继承自`widget`类，并重写了`createElement()`方法,不同的是返回的`Element`对象并不相同;另外`StatefulWidget`类中添加了一个新的接口`createState()`

<!---->

-   从下面的代码来认识一下

```java
abstract class StatefulWidget extends Widget {
  const StatefulWidget({ Key key }) : super(key: key);
    
  @override
  StatefulElement createElement() => StatefulElement(this);
    
  @protected
  State createState();
}
```

-   `StatefulElement`间接继承自`Element`类，与`StatefulWidget`相对应

    -   `StatefulElement`可能会多次调用`createState()`来创建状态(State)对象

<!---->

-   `createState()`用于创建和`StatefulWidget`相关的状态，它在`StatefulWidget`的生命周期中会被多次调用

    -   怎么理解这个多次调用呢？

        -   感觉就是这里写好了一个组件
        -   你会多次使用这个组件
        -   类似类组件和函数组件，就是你创建了一个组件实例
        -   它变成了一个对象

<!---->

-   本质上，当一个 StatefulWidget 同时插入到 widget 树的多个位置时，Flutter 框架就会调用该方法为每一个位置生成一个独立的State实例，其实，本质上就是一个`StatefulElement`对应一个State实例。

## 1.State

### a.简介

一个`StatefulWidget`类会对应一个`State`类，`State`表示与其对应的`StatefulWidget`要维护的状态，`State`中保存的状态满足：

-   在`widget`构建时可以被同步读取

<!---->

-   在`widget`生命周期中可以被改变，当`State`被改变时，可以手动调用其`setState()`方法通知`Flutter`框架状态发生改变，`Flutter`框架在收到消息后，会重新调用其`build`方法重新构建`widget`树，从而达到更新ui的目的

    -   这里的`setState()`和react神似好吧！

***

`State`中有两个常用属性：

-   `widget`它表示与该`State`实例关联的`widget`实例，由`Flutter`框架动态设置

    -   不用管，自动的

    -   但是这种关联并非永久的

        -   因为ui树上的某节点在重构的时候可能发生变化
        -   `State`实例只会在第一次插入到树中时被创建
        -   当在重新构建时,如果`widget`被修改了，框架会自动更新，咱别管就行了，wryyyyy！

<!---->

-   `context` --- `BuildContext`

### b.State生命周期

-   对比React/Vue，生命周期还是比较重要的

    -   比如Vue3中的`setup()`代表实例创建前和创建后
    -   比如React中`useEffect()`代表了创建后，检测到更新，销毁时生命周期
    -   当然，上面两种是React/Vue中比较常用到的生命周期

***

下面就让我们康康`State`的生命周期吧！

-   以计数器为例，实现一个计数器`CounterWidget`组件

    -   点击它可以使计数器加1
    -   要保存计数器的数值状态
    -   我们要使用到`StatefulWidget`

```java
class CounterWidget extends StatefulWidget {
  const CounterWidget({Key? key, this.initValue = 0});

  final int initValue;

  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}
```

-   `CounterWidget`接收一个`initValue`整型参数，它表示计数器的初始值。

<!---->

-   下面康康`State`的代码

```java
class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    //初始化状态
    _counter = widget.initValue;
    print("initState");
  }

  @override
  Widget build(BuildContext context) {
    print("build");
    return Scaffold(
      body: Center(
        child: TextButton(
          child: Text('$_counter'),
          //点击后计数器自增
          onPressed: () => setState(
            () => ++_counter,
          ),
        ),
      ),
    );
  }
  
  @override
  void didUpdateWidget(CounterWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    print("didUpdateWidget ");
  }

  @override
  void deactivate() {
    super.deactivate();
    print("deactivate");
  }

  @override
  void dispose() {
    super.dispose();
    print("dispose");
  }

  @override
  void reassemble() {
    super.reassemble();
    print("reassemble");
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    print("didChangeDependencies");
  }
}
```

-   接下来，我们创建一个新路由，在新路由中，我们只显示一个`CounterWidget`：

    -   使用`Navigator.push`和`MatericalPageRoute`可以实现路由跳转

```java
class StateLifecycleTest extends StatelessWidget {
  const StateLifecycleTest({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('生命周期'),
      ),
      body:Center(
        child: CounterWidget(),
      ),
    );
  }
}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4831dc060c9345bc89334d3205e95579~tplv-k3u1fbpfcp-zoom-1.image)

-   我们运行应用打开该路由页面,新路由中央就会出现一个数字0，然后控制台日志输出

    -   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7216e19158e14631bc960eb9c450a873~tplv-k3u1fbpfcp-zoom-1.image)
    -   插入到`widget`树首先调用`initState`方法
    -   然后是`didChangeDependencies`方法
    -   最后是`build`

<!---->

-   然后我们点击热重载，控制台日志如下:

    -   没反应点一下屏幕中间的数字出发更新
    -   就会出现红框的print
    -   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f7bf22bfa104858a4f5406b989b3187~tplv-k3u1fbpfcp-zoom-1.image)
    -   热更新会依次触发`reassemble`,`disUpdateWidget`方法，最后是`build`

<!---->

-   接下来,我们在`widget`树中移除`CounterWidget`，将`build`方法更改

```java
Widget build(BuildContext context) {
  //移除计数器 
  //return CounterWidget ();
  //随便返回一个Text()
  return Text("41");
}
```

-   然后我们点击热重载，控制台日志应该如下:

    -   但是刷新把日志吃掉了
    -   但是我们要理解是这样
    -   这就是生命周期

```
reassemble
deactive
dispose
```

-   弃我去者，昨日之日不可留。不康也罢！

<!---->

-   后面发现切换路由会有后面两行！

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe8e5a68295544f69c3ed5502b5eb90c~tplv-k3u1fbpfcp-zoom-1.image)




***

### c.详细看看各个回调函数

-   `initState`当`widget`第一次插入到`widget`树的时候会被调用

    -   类似setup(),useEffect(()=>{},[])

    -   不能在该回调中调用`BuildContext.dependOnInheritedWidgetOfExactType`（该方法用于在 `widget` 树上获取离当前 widget 最近的一个父级`InheritedWidget`

        -   原因是在初始化完成后， `widget` 树中的`InheritFrom widget`也可能会发生变化，所以正确的做法应该在在`build（）`方法或`didChangeDependencies()`中调用它。

<!---->

-   `didChangeDependencies()`：当State对象的依赖发生变化时会被调用；

    -   例如：在之前`build()` 中包含了一个`InheritedWidget`，然后在之后的`build()` 中`Inherited widget`发生了变化
    -   那么此时`InheritedWidget`的子 widget 的`didChangeDependencies()`回调都会被调用。
    -   典型的场景是当系统语言 Locale 或应用主题改变时，Flutter 框架会通知 widget 调用此回调。
    -   需要注意，组件第一次被创建后挂载的时候（包括重创建）对应的`didChangeDependencies`也会被调用。

<!---->

-   `build()`：widget灵魂，不解释！

    -   在调用`initState()`之后。
    -   在调用`didUpdateWidget()`之后。
    -   在调用`setState()`之后。
    -   在调用`didChangeDependencies()`之后。
    -   在State对象从树中一个位置移除后（会调用deactivate）又重新插入到树的其它位置之后。

<!---->

-   `reassemble()`：此回调是专门为了开发调试而提供的，在热重载(hot reload)时会被调用，此回调在Release模式下永远不会被调用。

<!---->

-   `didUpdateWidget ()`：在 widget 重新构建时，Flutter 框架会调用`widget.canUpdate`来检测 widget 树中同一位置的新旧节点，然后决定是否需要更新

    -   如果`widget.canUpdate`返回`true`则会调用此回调。
    -   正如之前所述，`widget.canUpdate`会在新旧 widget 的 `key` 和 `runtimeType` 同时相等时会返回true
    -   也就是说在在新旧 widget 的`key`和`runtimeType`同时相等时
    -   `didUpdateWidget()`就会被调用。

<!---->

-   `deactivate()`：当 State 对象从树中被移除时，会调用此回调。

    -   在一些场景下，Flutter 框架会将 State 对象重新插到树中，如包含此 State 对象的子树在树的一个位置移动到另一个位置时（可以通过GlobalKey 来实现）。
    -   如果移除后没有重新插入到树中则紧接着会调用`dispose()`方法。

<!---->

-   `dispose()`：当 State 对象从树中被永久移除时调用；通常在此回调中释放资源。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c85a62130d244ef97043bf5d6386246~tplv-k3u1fbpfcp-zoom-1.image)

## 2.在Widget树中获取State对象

由于 StatefulWidget 的的具体逻辑都在其 State 中，所以很多时候，我们需要获取 StatefulWidget 对应的State 对象来调用一些方法，比如`Scaffold`组件对应的状态类`ScaffoldState`中就定义了打开 SnackBar（路由页底部提示条）的方法。我们有两种方法在子 widget 树中获取父级 StatefulWidget 的State 对象。

### a.通过Context获取

-   `context`对象有一个`findAncestorStateOfType()`方法，该方法可以从当前节点沿着 widget 树向上查找指定类型的 `StatefulWidget` 对应的 `State` 对象。下面是实现打开 `SnackBar`的示例：

```java
class GetStateObjectRoute extends StatefulWidget {
  const GetStateObjectRoute({Key? key}) : super(key: key);

  @override
  State<GetStateObjectRoute> createState() => _GetStateObjectRouteState();
}

class _GetStateObjectRouteState extends State<GetStateObjectRoute> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("子树中获取State对象"),
      ),
      body: Center(
        child: Column(
          children: [
            Builder(builder: (context) {
              return ElevatedButton(
                onPressed: () {
                  // 查找父级最近的Scaffold对应的ScaffoldState对象
                  ScaffoldState _state = context.findAncestorStateOfType<ScaffoldState>()!;
                  // 打开抽屉菜单
                  _state.openDrawer();
                },
                child: Text('打开抽屉菜单1'),
              );
            }),
          ],
        ),
      ),
      drawer: Drawer(),
    );
  }
}
```

-   一般来说，如果`StatefulWidget`的状态是私有的，不能直接获取`State`对象

<!---->

-   和`C++`相似，那么就会有一个公开的方法来访问

    -   `context.findAncestorStateOfType`获取`StatefulWidget`的状态的方法是通用的

<!---->

-   我们不能指定`StatefulWidget`的状态是否私有，所以在Fluyyer开发中有了一个约定

    -   如果希望状态是暴露出的

        -   应当在`StatefulWidget`中提供一个`of`静态方法来获取`State`对象

    -   如果不希望`State`暴露,则不提供`of`方法

<!---->

-   我们康康如何使用`of`方法

```java
Builder(builder: (context) {
  return ElevatedButton(
    onPressed: () {
      // 直接通过of静态方法来获取ScaffoldState
      ScaffoldState _state=Scaffold.of(context);
      // 打开抽屉菜单
      _state.openDrawer();
    },
    child: Text('打开抽屉菜单2'),
  );
}),
```

-   又比如我们想显示`snack bar`，可以通过`of`和`showSnackBar`

```java
Builder(builder: (context) {
  return ElevatedButton(
    onPressed: () {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("我是SnackBar")),
      );
    },
    child: Text('显示SnackBar'),
  );
}),
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0f01e69bc334157b916686c49634c24~tplv-k3u1fbpfcp-zoom-1.image)

-   点击`显示SnackBar` 出现snackbar！

### b.通过GlobalKey

Flutter还有一种通用的获取`State`对象的方法---通过`GlobalKey`来获取！步骤分两步:

-   1.给目标`StatefulWidget`添加`GlobalKey`

```java
//定义一个globalKey, 由于GlobalKey要保持全局唯一性，我们使用静态变量存储
static GlobalKey<ScaffoldState> _globalKey= GlobalKey();
...
Scaffold(
    key: _globalKey , //设置key
    ...  
)
```

-   2.通过`GlobalKey`来获取`State`对象

```java
_globalKey.currentState.openDrawer()
```




-   GlobalKey 是 Flutter 提供的一种在整个 App 中引用 element 的机制。

    -   如果一个 widget 设置了`GlobalKey`

        -   那么我们便可以通过`globalKey.currentWidget`获得该 widget 对象
        -   `globalKey.currentElement`来获得 widget 对应的element对象
        -   如果当前 widget 是`StatefulWidget`，则可以通过`globalKey.currentState`来获得该 widget 对应的state对象。

<!---->

-   震惊！这个不就是React中的Redux，Vue中的pinia？？？

    -   所以，这个肯定开销还是比较大的，要避免使用
    -   然后，需要保证`GlobalKey`在整个`widget`树中必须是唯一的

# 通过RenderObject自定义Widget

-   这个属于扫盲，新手用组件库就好啦！

<!---->

-   `StatelessWidget`和`StatefulWidget`都是用于组合其他组件的，它们本身没有对应的RenderObject

<!---->

-   Flutter组件库中有很多基础组件都不是通过`StatelessWidget`和`StatefulWidget`来实现的

    -   比如`Text`，`Column`，`Align`等
    -   实际上Flutter最原始的定义组件的方式就是通过定义RenderObject来实现

<!---->

-   简单演示一下通过RenderObject定义组件的方式:

```java
class CustomWidget extends LeafRenderObjectWidget{
  @override
  RenderObject createRenderObject(BuildContext context) {
    // 创建 RenderObject
    return RenderCustomObject();
  }
  @override
  void updateRenderObject(BuildContext context, RenderCustomObject  renderObject) {
    // 更新 RenderObject
    super.updateRenderObject(context, renderObject);
  }
}

class RenderCustomObject extends RenderBox{

  @override
  void performLayout() {
    // 实现布局逻辑
  }

  @override
  void paint(PaintingContext context, Offset offset) {
    // 实现绘制
  }
}
```

-   特别地，如果组件不包含子组件，则我们可以直接继承自`LeafRenderObjectWidget`，它是`RenderObjectWidget`的子类，而`RenderObjectWidget`继承自`Widget`,我们可以看一下它的实现:

```java
abstract class LeafRenderObjectWidget extends RenderObjectWidget {
  const LeafRenderObjectWidget({ Key? key }) : super(key: key);

  @override
  LeafRenderObjectElement createElement() => LeafRenderObjectElement(this);
}
```

-   简单来说就是重写了`createElement`方法

# Flutter SDK内置组件库介绍

-   Flutter提供了一套丰富，强大的基础组件，在基础组件库之上Flutter又提供了一套Material风格(Android默认的视觉风格)和一套Cupertino风格(IOS视觉风格)的组件库，导入就可以使用了。

    -   两个组件库是要一统天下啊，哈哈

<!---->

-   ## 1.基础组件
   ```java
        import 'package:flutter/widgets.dart';
        ```

  -   比较语义化了！

  -   `Text (opens new window)`：文本

  -   `Row (opens new window)`、 `Column (opens new window)`：类似css里面的Flex布局中的flex-direction，指定排列方向

  -   `Stack (opens new window)`：允许子widget堆叠，你可以使用`Positioned (opens new window)`来定位他们相对于`Stack`的上下左右四条变的位置。

  -   这个类比绝对布局absolute

  -   `Container (opens new window)`:可以理解为一个盒子模型吧，div

  -   `BoxDecoration (opens new window)`：如 background、一个边框、或者一个阴影

## 2.Material组件

Flutter 提供了一套丰富 的Material 组件，它可以帮助我们构建遵循 Material Design 设计规范的应用程序。Material 应用程序以`MaterialApp (opens new window)` 组件开始， 该组件在应用程序的根部创建了一些必要的组件，比如`Theme`组件，它用于配置应用的主题。 是否使用`MaterialApp (opens new window)`完全是可选的，但是使用它是一个很好的做法。在之前的示例中，我们已经使用过多个 Material 组件了，如：`Scaffold`、`AppBar`、`TextButton`等。要使用 Material 组件，需要先引入它：

```java
import 'package:flutter/material.dart';
```

## 3.Cupertino组件

Flutter 也提供了一套丰富的 Cupertino 风格的组件，尽管目前还没有 Material 组件那么丰富，但是它仍在不断的完善中。值得一提的是在 Material 组件库中有一些组件可以根据实际运行平台来切换表现风格，比如`MaterialPageRoute`，在路由切换时，如果是 Android 系统，它将会使用 Android 系统默认的页面切换动画(从底向上)；如果是 iOS 系统，它会使用 iOS 系统默认的页面切换动画（从右向左）。由于在前面的示例中还没有Cupertino组件的示例，下面我们实现一个简单的 Cupertino 组件风格的页面：

```java
//导入cupertino  widget 库
import 'package:flutter/cupertino.dart';

class CupertinoTestRoute extends StatelessWidget  {
  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: CupertinoNavigationBar(
        middle: Text("Cupertino Demo"),
      ),
      child: Center(
        child: CupertinoButton(
            color: CupertinoColors.activeBlue,
            child: Text("Press"),
            onPressed: () {}
        ),
      ),
    );
  }
}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2ed5a58a8714cb8a5075ba3bc7fae53~tplv-k3u1fbpfcp-zoom-1.image)

# 总结

-   1.Flutter的widget类型有两种

    -   a.`StatefulWidget`有状态widget---受控组件
    -   b.`StatelessWidget`无状态widget---非受控组件

<!---->

-   2.组件库的使用

    -   可以随意使用，不必担心引入过多的组件库让安装包变大

    -   `Material`和`Cupertino`都是在基础组件库之上的

        -   内部引入了`flutter.widgets.dart`基础库了

<!---->

-   3.其实不难发现

    -   Flutter的代码可读性其实还不错

    -   写代码和搭积木一样，一层套一层

    -   当然本篇文章只是浅浅地认识

        -   后面再一起学习其他好康的！

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/922b40643bbb4079a51a3955b20f307f~tplv-k3u1fbpfcp-zoom-1.image)
