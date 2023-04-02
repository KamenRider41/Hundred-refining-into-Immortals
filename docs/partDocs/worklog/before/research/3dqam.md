<!--
 * @Author: 41
 * @Date: 2023-04-01 20:16:41
 * @LastEditors: 41
 * @LastEditTime: 2023-04-02 15:52:48
 * @Description: 
-->
# 新型三维星座图设计 :star:
::: tip 科研Tips
通过星座性能指数公式对三维星座进行构建

通过数学推导和三维立体几何确定了部分条件

引入待定参数确定了新型的三维星座的构建方案

应用于OFDM-ROF系统中，提高了系统的误码性能
:::


首先，对于传统的二维16-QAM,我们可以知道星座点间的最小距离是2，所以，我们先人为地分为Z坐标为-3，-1，1，3的四层星座图，这样可以确保不同维间的最小距离至少是2。在同一维度的第一层和第三层使用了传统了4-QAM。
根据格理论，如果一格可由另一格通过旋转、反射、缩放或这些运算的组合而得到，就称这两格等效。因为星座图的设计参考了格理论，所以我们的不同维间的格为等效的时候能够获得比较好的性能指数。所以第二层和第四层的星座设计应该是传统4-QAM的旋转和拉伸来得到的。

<img src="/Hundred-refining-into-Immortals/research/3dqam/rotation.jpg">
<h3 style="textAlign:center;">三维星座不同维层旋转示意图</h3>

如图，以AB所在直线向下做一个切面，切面和第二层的交线面积较小的一侧是第二层星座图旋转的位移区域。不妨设旋转的星座点为O，那么在位移区域最左端的时候，有OA最小，OB最大。在旋转过程中，OA不断变大，OB不断变小。所以我们可以分析出，当星座点旋转到位移区域中央的时候，即OA=OB的时候，可以取得 。此时，本文可以确保两层间的 取到最大值，进而可能扩大全星座图的 。综上，本文的相间星座层间的旋转角度应为90°。

---

<img src="/Hundred-refining-into-Immortals/research/3dqam/para.jpg">
<h3 style="textAlign:center;">三维星座同维层待定拉伸示意图</h3>
本文引入了一个格拉伸变量μ，用这个变量来控制第二层和第四层星座层的星座点拉伸长度。则有星座拉伸示意图如图
首先，以A点向下做一个垂直截面，可以得到和第二层星座层相交的D、B两点，A点所在截面相对于DOB面的垂足为E。不妨设第二层星座层的中心为O，拉伸星座点的其中一点为C。
通过推导最终可以得到三维星座图的星座性能指数为

<img src="/Hundred-refining-into-Immortals/research/3dqam/gongshi.png">

---

最终可以得到三维星座如下图
<img src="/Hundred-refining-into-Immortals/research/3dqam/three-con.jpg">
<h3 style="textAlign:center;">三维星座设计示意图</h3>

---

<img src="/Hundred-refining-into-Immortals/research/3dqam/kuangjia.jpg">
<h3 style="textAlign:center;">OFDM-ROF系统的框架图</h3>

---

因为降维加密过程中，坐标点的x或者y值会进行置乱，所以我们都从坐标值的概念来讨论。
坐标值可能置乱的点连接起来的形状像一个井字，所以我们称为置乱井。
可以知道任意的两个置乱井在确定先后的情况下可以确定唯一的置乱点。
<img src="/Hundred-refining-into-Immortals/research/3dqam/threetotwo.jpg">
<h3 style="textAlign:center;">置乱井-三维降维加密示意图</h3>
---
<img src="/Hundred-refining-into-Immortals/research/3dqam/zhuangzhi.jpg">
<h3 style="textAlign:center;">实验的装置图</h3>
所提出的安全OFDM系统的实验装置如图4.6所示。首先，我们通过matlab生成我们所需要的数据然后将OFDM信号加载到任意波形发生器(AWG)上。两个外腔激光器(ECL1和ECL2)分别在1553.65nm和1554.45nm下进行工作，产生两个间隔为100GHz的连续波(CW)光波。ECL1和ECL2的输出功率分别为14.5dBm和10dBm。通过偏振控制器(PC)后，ECL1的CW通过带宽为10GHz，偏置电压为2.1V的马赫-曾德尔调制器(MZM)对加密的OFDM信号进行调制。光信号通过50km的单模标准光纤后，使用固定增益的掺铒光纤放大器（EDFA）对光信号进行放大，利用可变光衰减器（VOA）对接收到的光OFDM信号进行功率调节。在该步骤中，可以通过调整VOA来扫描接收光功率（ROP），ROP的测量点如图4.6所示。在实验中，在注入光电二极管（PD）之前，最大接收光功率固定在0 dBm。在被带宽为100GHz的PD捕获后，信号被发送到无线发射机。在无线接收器处，加密的OFDM信号通过一对喇叭天线（HAs）在5米无线信道上传输，增益为25 dBi。最后，在通过10GHz的电子放大器（EA）后，信号被数字采样示波器（DSO、DSA72004B、12GSA/s）捕获。

---
<img src="/Hundred-refining-into-Immortals/research/3dqam/snr.jpg">
<h3 style="textAlign:center;">实验的结果图1</h3>
在实验中,本文为了研究新型三维星座图和传统二维星座图的误码率性能。我们对进行了二维传统OFDM和基于GC函数和不同构建参数 的新型三维星座OFDM进行了不同光信噪比下的实验。实验结果图如图4.7所示。于传统的OFDM信号相比，GC-3D-OFDM信号的误码率性能得到了改善。BER为 1^10-3时，降低了约1.6dB。
在前面的章节本文解得 的取值范围为 1< μ < 3sqrt(2) ,所以实验使用了五个值来进行实验，从实验结果可以看出来，误码率随着调制参数的变化趋势是先变小再变大。本文在 时取得了最大的误码性能结果。分析原因如图，当μ=2 时， 决定的置乱点和确定点的最小距离最大，即在三维降维到二维的星座图中，所有的点之间的距离相等都为1。

---

<img src="/Hundred-refining-into-Immortals/research/3dqam/ans.jpg">
<h3 style="textAlign:center;">实验的结果图2</h3>
首先，本文使用的密钥是从提出的基于双信号源的新型蔡氏电路得到的，从理论上来说，双信号源可以是任意信号，那么信号的幅度，波形，频率等参数也可以是任意的。所以，密钥空间是接近无穷大的。
为了研究btb和通过50km单模标准光纤两者OFDM信号的区别，本文针对调制参数为 时，通过btb和50km单模标准光纤的实验结果表明，通过光纤后，本文的信号没有明显的减弱，甚至会出现经过光纤反射信号误码性能变得更好的情况。基于GC函数的降维加密方案的三维星座OFDM调制和不加密的三维星座OFDM调制的实验数据同样表明，这种降维加密的方案在提高安全性的同时不会取影响系统的误码性能。









