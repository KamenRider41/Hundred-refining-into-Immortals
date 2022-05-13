# 三栏布局 :star:
## 浮动布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 13:07:03
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 16:04:24
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      height: 200px;
    }
    .left {
      width: 33vw;
      height: 100%;
      background-color: red;
      float: left;
    }
    .main {
      height: 100%;
      /* width: 500px; */
      background-color: skyblue;
    }
    .right {
      width: 33vw;
      height: 100%;
      background-color: green;
      float: right;
    }
  </style>
</head>
<!-- 注意:float会影响下面的元素 -->
<body>
  <div class="box">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
  </div>
</body>
</html>
```
:::
## 绝对布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 13:11:10
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 15:26:16
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      position: relative;
    }

    .left {
      width: 300px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: red;
    }

    .main {
      width: 100%;
      height: 200px;
      /* padding-left: 300px;
      padding-right: 300px; */
      margin-left: 300px;
      margin-right: 300px;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-color: skyblue;
    }

    .right {
      width: 300px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: green;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
  </div>
</body>

</html>
```
:::

## 圣杯布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 13:59:59
 * @LastEditors: 41
 * @LastEditTime: 2022-03-09 22:30:56
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      height: 200px;
      padding: 0 200px;
    }

    .main {
      width: 100%;
      height: 300px;
      background-color: skyblue;
      float: left;
    }

    .left {
      width: 200px;
      height: 200px;
      background-color: red;
      float: left;
      margin-left: -100%;
      position: relative;
      left: -200px;
    }

    .right {
      width: 200px;
      height: 200px;
      background-color: green;
      float: right;
      margin-right: -200px;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="main"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</body>

</html>

```

:::

## 双飞翼布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 14:03:55
 * @LastEditors: 41
 * @LastEditTime: 2022-03-09 22:42:57
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .main-wrap {
      width: 100%;
      padding: 0 200px;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
    }

    .main {
      height: 300px;
      background-color: skyblue;
    }

    .left {
      width: 200px;
      height: 200px;
      background-color: red;
      float: left;
      margin-left: -100%;
    }

    .right {
      width: 200px;
      height: 200px;
      background-color: green;
      float: left;
      margin-left: -200px;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="main-wrap">
      <div class="main"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</body>

</html>

```

:::

## 网格布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 14:08:15
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 15:17:27
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      width: 100%;
      display: grid;
      height: 100px;
      /* grid-template-rows: 50px 200px 50px; */
      grid-template-columns: 200px auto 200px;
      /* grid-template-columns: 200px; */
    }

    .main {
      background-color: skyblue;
    }

    .left {
      background-color: red;
    }

    .right {
      background-color: green;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
  </div>
</body>

</html>
```

:::

## flex布局
::: details 点击查看代码
<!--
 * @Author: 41
 * @Date: 2022-03-04 14:04:22
 * @LastEditors: 41
 * @LastEditTime: 2022-03-23 15:46:26
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
    }

    .main {
      flex: 1;
      /* height: 300px; */
      background-color: skyblue;
      order: 2;
    }

    .left {
      /* flex: 1; */
      width: 200px;
      height: 200px;
      background-color: red;
      order: 1;
    }

    .right {
      /* flex: 1; */
      width: 200px;
      height: 200px;
      background-color: green;
      order: 3;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="main"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</body>

</html>

:::

## table布局
::: details 点击查看代码
```html
<!--
 * @Author: 41
 * @Date: 2022-03-04 14:06:22
 * @LastEditors: 41
 * @LastEditTime: 2022-05-11 15:23:45
 * @Description: 
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box {
      width: 100%;
      height: 300px;
      display: table;
    }

    .box>div {
      display: table-cell;
    }

    .main {
      background-color: skyblue;
    }

    .left {
      width: 200px;
      background-color: red;
    }

    .right {
      width: 200px;
      background-color: green;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="left"></div>
    <div class="main"></div>
    <div class="right"></div>
  </div>
</body>

</html>

```
:::

