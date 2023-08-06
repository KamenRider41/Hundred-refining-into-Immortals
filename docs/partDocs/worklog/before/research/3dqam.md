<!--
 * @Author: 41
 * @Date: 2023-04-01 20:16:41
 * @LastEditors: 41
 * @LastEditTime: 2023-08-07 01:01:21
 * @Description: 
-->
# 新型三维星座图设计 :star:
::: tip 科研Tips
通过星座性能指数公式对三维星座进行构建

通过数学推导和三维立体几何确定了部分条件

引入待定参数确定了新型的三维星座的构建方案

应用于OFDM-ROF系统中，提高了系统的误码性能
:::

## 设计方案
- 首先，对于传统的二维16-QAM星座图，我们知道星座点间的最小距离为2。因此，为了确保不同维度之间的最小距离至少为2，我们可以将星座图人为地分为四层，其中每层的Z坐标为-3、-1、1、3。在同一维度的第一层和第三层，我们使用了传统的4-QAM星座图。
- 根据格理论的基本概念，如果一个格子可以通过旋转、反射、缩放或这些运算的组合而得到另一个格子，那么这两个格子就是等效的。由于星座图的设计参考了格理论，因此当不同维度之间的格子是等效的时候，我们可以获得比较好的星座图性能指标。因此，在第二层和第四层中，本文设计了星座点的旋转和拉伸，以得到等效的星座图结构，从而提高星座图的性能指标。


<img src="/Hundred-refining-into-Immortals/research/3dqam/rotation.jpg">
<h3 style="textAlign:center;">三维星座不同维层旋转示意图</h3>

- 如图，以AB所在直线向下做一个切面，切面和第二层的交线面积较小的一侧是第二层星座图旋转的位移区域。不妨设旋转的星座点为O，那么在位移区域最左端的时候，有OA最小，OB最大。在旋转过程中，OA不断变大，OB不断变小。所以我们可以分析出，当星座点旋转到位移区域中央的时候，即OA=OB的时候，可以取得 。此时，本文可以确保两层间的 取到最大值，进而可能扩大全星座图的 。综上，本文的相间星座层间的旋转角度应为90°。

---

<img src="/Hundred-refining-into-Immortals/research/3dqam/para.jpg">
<h3 style="textAlign:center;">三维星座同维层待定拉伸示意图</h3>
- 本文引入了一个格拉伸变量μ，用这个变量来控制第二层和第四层星座层的星座点拉伸长度。则有星座拉伸示意图如图
首先，以A点向下做一个垂直截面，可以得到和第二层星座层相交的D、B两点，A点所在截面相对于DOB面的垂足为E。不妨设第二层星座层的中心为O，拉伸星座点的其中一点为C。
- 通过推导最终可以得到三维星座图的星座性能指数为

<img src="/Hundred-refining-into-Immortals/research/3dqam/gongshi.png">

---
- 可得设计的三维星座图如下：

<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/3dqam/three-con.jpg">
<h3 style="textAlign:center;">三维星座设计示意图</h3>

## OFDM-ROF系统结构和加密原理

<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/3dqam/kuangjia.jpg">

<h3 style="textAlign:center;">OFDM-ROF系统的框架图</h3>

- 本文提出了“置乱井”的概念。在“置乱井”中，通过对坐标值进行GC函数的置乱操作，可以得到一个待定的置乱点的集合，其中每个置乱点都对应着坐标值可能的不同投影。这个置乱点集合的轨迹形成了“置乱井”的形状。因此，当两个“置乱井”相交时，它们所共有的置乱点集合就是最终的置乱终点。通过确定“置乱井”的前后循序，就可以得到最终的置乱结果。当然，置乱井轨迹会随着本文提出的待定参数 变化而发生变化，通过对待定参数的调整，可以控制置乱井轨迹的形状，从而实现更加灵活和安全的加密操作。

<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/3dqam/threetotwo.jpg">
<h3 style="textAlign:center;">置乱井-三维降维加密示意图</h3>

---
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/3dqam/zhuangzhi.jpg">
<h3 style="textAlign:center;">实验的装置图</h3>
- 所提出的安全OFDM系统的实验装置如图4.6所示。首先，我们通过matlab生成我们所需要的数据然后将OFDM信号加载到任意波形发生器(AWG)上。两个外腔激光器(ECL1和ECL2)分别在1553.65nm和1554.45nm下进行工作，产生两个间隔为100GHz的连续波(CW)光波。ECL1和ECL2的输出功率分别为14.5dBm和10dBm。通过偏振控制器(PC)后，ECL1的CW通过带宽为10GHz，偏置电压为2.1V的马赫-曾德尔调制器(MZM)对加密的OFDM信号进行调制。光信号通过50km的单模标准光纤后，使用固定增益的掺铒光纤放大器（EDFA）对光信号进行放大，利用可变光衰减器（VOA）对接收到的光OFDM信号进行功率调节。在该步骤中，可以通过调整VOA来扫描接收光功率（ROP），ROP的测量点如图4.6所示。在实验中，在注入光电二极管（PD）之前，最大接收光功率固定在0 dBm。在被带宽为100GHz的PD捕获后，信号被发送到无线发射机。在无线接收器处，加密的OFDM信号通过一对喇叭天线（HAs）在5米无线信道上传输，增益为25 dBi。最后，在通过10GHz的电子放大器（EA）后，信号被数字采样示波器（DSO、DSA72004B、12GSA/s）捕获。

## 实验结果分析
不同构建参数情况下三维星座的星座点间最短距离、星座二维平均能量和星座性能指数如表所示

<img src="/Hundred-refining-into-Immortals/research/3dqam/biao.png">


<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/3dqam/snr.jpg">
<h3 style="textAlign:center;">不同参数星座图和传统星座图的误码率对比结果图</h3>
- 在实验中,本文为了研究新型三维星座图和传统二维星座图的误码率性能。我们对进行了二维传统OFDM和基于GC函数和不同构建参数 的新型三维星座OFDM进行了不同光信噪比下的实验。实验结果图如图4.7所示。于传统的OFDM信号相比，GC-3D-OFDM信号的误码率性能得到了改善。BER为 1^10-3时，降低了约1.6dB。
- 在前面的章节本文解得 的取值范围为 1< μ < 3sqrt(2) ,所以实验使用了五个值来进行实验，从实验结果可以看出来，误码率随着调制参数的变化趋势是先变小再变大。本文在 时取得了最大的误码性能结果。分析原因如图，当μ=2 时， 决定的置乱点和确定点的最小距离最大，即在三维降维到二维的星座图中，所有的点之间的距离相等都为1。

---

<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/3dqam/ans.jpg">
<h3 style="textAlign:center;">相同参数通过光纤和BTB实验的误码率对比结果图</h3>
- 首先，本文使用的密钥是从提出的基于双信号源的新型蔡氏电路得到的，从理论上来说，双信号源可以是任意信号，那么信号的幅度，波形，频率等参数也可以是任意的。所以，密钥空间是接近无穷大的。
- 为了研究btb和通过50km单模标准光纤两者OFDM信号的区别，本文针对调制参数为 时，通过btb和50km单模标准光纤的实验结果表明，通过光纤后，本文的信号没有明显的减弱，甚至会出现经过光纤反射信号误码性能变得更好的情况。基于GC函数的降维加密方案的三维星座OFDM调制和不加密的三维星座OFDM调制的实验数据同样表明，这种降维加密的方案在提高安全性的同时不会取影响系统的误码性能。

<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/3dqam/safe1.jpg">
<h3 style="textAlign:center;">新型蔡氏混沌系统初值发生微小变化的误码率曲线</h3>
- 为了进一步研究改进型蔡氏电路系统的安全性能，对改进型蔡氏电路的七个初始值进行了误码率实验测试。实验测试了50km SSMF传输后改进型蔡氏电系统的7个初值发生微小变化对误码率曲线的影响。如图所示，横坐标表示参数变化的精度。如 表示参数在小数点后第15位发生改变。由图可知，当变量发生 的变化后，误码率变为0.5左右，此时加密数据无法解密位正确信息。当上述参数在精度范围之外发生变化，系统的误码率显著增加，加密信号无法正常恢复，反映了改进型蔡氏电路系统对初值有较强的敏感性。
- 在此基础上，改进型蔡氏电路系统的初始值个数从传统蔡氏电路的三个上升到了七个，系统的密钥空间理论上增加了2.33倍。同时，改进型蔡氏电路系统还受到信号源的影响，信号源的参数也可以进一步扩大密钥空间。在不考虑信号源的情况下，至少可以获得 的密钥空间。以美国新型超级计算机“Frontier”每秒百亿亿次的计算速度，需要 年的时间才能计算出正确的密钥，足以抵抗非法者的穷举攻击。

<img src="/Hundred-refining-into-Immortals/research/3dqam/safe2.jpg">
<h3 style="textAlign:center;">传统蔡氏混沌系统初值发生微小变化的误码率曲线</h3>

- 为了进一步研究不同混沌系统之间密钥空间的区别，本文又分别对传统的蔡氏电路的三个初始值和基于单信号源的五个初始值进行了误码率实验测试。实验结果如图3.21所示。在不考虑信号源的情况下，传统蔡氏电路至少可以获得 的密钥空间，基于单信号源的蔡氏电路至少可以获得 的密钥空间。通过对比，所提的改进型蔡氏电路具有更大的密钥空间，能显著提高光通信系统的安全性。











