<!--
 * @Author: 41
 * @Date: 2023-03-27 09:49:21
 * @LastEditors: 41
 * @LastEditTime: 2023-08-07 01:20:07
 * @Description: 
-->
# 基于机器学习的三维星座解调 :star:
::: tip 科研Tips
由于使用了三维星座

所以三维星座的解调维度上升导致了计算复杂度提高

使用机器学习的黑盒性质可以降低解调所耗费的时间
:::

[[TOC]]
## 基于机器学习的OFDM三维星座解调
### 收集数据
- 在原来OFDM的仿真基础上把解密后的星座数据和传送前的转十进制数据合并输出为csv文件
- csvwrite写入文件
### 在jupyter notebook上进行训练的提前工作
#### 在conda上创建一个新环境
- `conda create -n ml-cd python=3.6`创建一个ml-cd环境
- `conda activate ml-cd`切换到这个环境
- 下载一些机器学习基础包
```bash
pip install numpy
pip install scipy
pip3 install -U scikit-learn # 这是3.+版本的安装命令
```
#### 在jupyter-notebook中切换到ml-cd环境
- 在conda中使用命令添加原来的环境`python -m ipykernel install --name ml-cd`
- 这样就能保证使用的环境是体积最小的了
#### 代码实现
- 由于老师说不要公开代码
- 这里本来准备建个代码仓库贴出来的
- 所以最终不放代码了，之类会放所有的结果图
## 基于决策树算法模型结果分析
### 决策树深度
- 特别地，我们研究了决策树深度的影响：
可以看出深度到10层之后，深度再增加，决策树的精确度不再增加了。所以模型的最佳深度应该是10层

<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/deep.jpg">

### 决策树模型的混淆矩阵
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/tree_confusion.jpg">

### 决策树模型的ROC曲线
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/tree_roc1.png">
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/tree_roc2.png">

### 决策树模型的PR曲线
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/tree_pr.png">

## 基于支持向量机的模型结果分析
### 支持向量机的混淆矩阵
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/svm_confusion.jpg">

### 支持向量机的ROC曲线
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/svm_roc1.png">
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/svm_roc2.png">

### 支持向量机的PR曲线
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/svm_pr.png">

## 基于神经网络的模型结果分析
### 隐藏层节点和层数
- 特别地，我们研究一下神经网络隐藏层个数和隐藏层层数之间的关系
在隐藏层只有一层的时候，我们的精度无论如何训练精度都不高
在隐藏层达到两层后，随着隐藏层节点数的增加，都能达到一个不错的精度
一般在节点数达到64之后，再增加节点数精度就几乎不再增加了
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/net.jpg">

### 神经网络的混淆矩阵
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/nn_confusion.jpg">

### 神经网络的ROC曲线
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/net_roc1.png">
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/net_roc2.png">

### 神经网络的PR曲线
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/nn_pr.png">

## 三个模型和传统解调的对比分析
### 三个模型和传统解调不同信噪比的星座的实验对比图
*模型是用信噪比为13dB时的星座数据来训练的*
- 从解调精度来看
  - 支持向量机的效果最好，达到了和传统解调一样的精度
  - 神经网络次之，决策树算法效果最差
  - 达到训练数据的信噪比时，四者的精确度一样
  - 也就是说支持向量机的鲁棒性最好
  
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/ml-snr.png">

### 三个模型和传统解调所消耗时间的实验对比图
- 从解调时间来看
  - 三个模型的解调时间都比传统解调所消耗的时间要短
  - 之外，决策树耗时最短，神经网络次之，支持向量机最长
<img style="
          width:50%;
          height:50%;
          position:relative;
          left:25%;
        "
      src="/Hundred-refining-into-Immortals/research/ml/ml-time.png">

### 总结
- 支持向量机的精确度虽然是最理想的，但是消耗时间是三个模型中最长的。
- 神经网络采用的是2层隐藏层，每层64个节点的模型，可以看出来，无论是精确度还是消耗时间都是一个折中的选择。
  - 但是理论上，神经网络还可以用不同结构去探索最佳的模型
  - 所以，神经网络还有开发的空间
- 决策树算法虽然是三个模型中鲁棒性最差的模型，但是它的解调时间是三个模型中最短的
- 综上，具体使用那个模型还需要去参考实际情况
  - 如果对精确度有更高的需求，我们可以去选择支持向量机或者神经网络
  - 如果需要大大降低解调的时间，我们可以去使用决策树模型


