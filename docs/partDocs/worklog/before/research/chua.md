<!--
 * @Author: 41
 * @Date: 2023-03-31 18:30:41
 * @LastEditors: 41
 * @LastEditTime: 2023-06-18 23:56:31
 * @Description: 
-->
# 基于双信号源的蔡氏电路 :star:
::: tip 科研Tips
对蔡氏电路进行改进

使蔡氏电路的混沌系统的李亚普洛夫指数提高

该混沌系统被用于OFDM-ROF系统中提高系统的安全性
:::

[[TOC]]
## 传统的蔡氏电路
- 蔡氏电路由于非线性器件比如电感，电容，引起的电压浮动属于一种非线性动力系统，即混沌系统
- 可以被用来加以运算后成为加密使用的密钥
- 可以从下图的示意图看出，浮动之间的联系会产生涡卷
#### 蔡氏电路混沌示意图
<img  style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/chua/chua-shiyi.png">

#### 蔡氏电路电路图
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/chua/chua.png">

#### 蔡氏电路仿真图
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/chua/NI-chua.png">


## 基于单信号源的蔡氏电路
#### 基于单信号源蔡氏电路图
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/chua/chua.png">

#### 基于单信号源蔡氏电路仿真图
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/chua/chua-single.png">


## 基于双信号源的蔡氏电路

#### 基于双信号源蔡氏电路图
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/chua/chua-double.jpg">


<div style="
    width:100%;
    display:flex;
    justify-content:center;">
      <img 
        style="
          width:50%;
          height:50%;
        "
        alt="频率相同正弦波"
        src="/Hundred-refining-into-Immortals/research/chua/3.6a.png">
      <img 
        style="
          width:50%;
          height:50%;
        "
        alt="频率相差十倍正弦波"
        src="/Hundred-refining-into-Immortals/research/chua/3.6b.png">
</div>
<h3 style="textAlign:center;">频率相同(左)和相差十倍(右)正弦波</h3>

<div style="
    width:100%;
    display:flex;
    justify-content:center;">
      <img 
        style="
          width:50%;
          height:50%;
        "
        alt="频率相同正弦波"
        src="/Hundred-refining-into-Immortals/research/chua/3.7a.png">
      <img 
        style="
          width:50%;
          height:50%;
        "
        alt="频率相差十倍正弦波"
        src="/Hundred-refining-into-Immortals/research/chua/3.7b.png">
</div>
<h3 style="textAlign:center;">同频率三角波(左)方波(右)</h3>

<div style="
    width:100%;
    display:flex;
    justify-content:center;">
      <img 
        style="
          width:50%;
          height:50%;
        "
        alt="频率相同正弦波"
        src="/Hundred-refining-into-Immortals/research/chua/3.8a.png">
      <img 
        style="
          width:50%;
          height:50%;
        "
        alt="频率相差十倍正弦波"
        src="/Hundred-refining-into-Immortals/research/chua/3.8b.png">
</div>
<h3 style="textAlign:center;">同频率正弦波方波(左)频率相差两倍正弦波方波(右)</h3>

<div style="
    width:100%;
    display:flex;
    justify-content:center;">
      <img 
        style="
          width:50%;
          height:50%;
        "
        alt="频率相同正弦波"
        src="/Hundred-refining-into-Immortals/research/chua/3.9a.png">
      <img 
        style="
          width:50%;
          height:50%;
        "
        alt="频率相差十倍正弦波"
        src="/Hundred-refining-into-Immortals/research/chua/3.9b.png">
</div>
<h3 style="textAlign:center;">同频率三角波方波(左)频率相差两倍三角波方波(右)</h3>