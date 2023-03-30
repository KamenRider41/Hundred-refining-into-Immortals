<!--
 * @Author: 41
 * @Date: 2023-03-27 09:49:21
 * @LastEditors: 41
 * @LastEditTime: 2023-03-29 18:47:16
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
#### 开始代码实现
这里之后整理好了贴一个仓库
## 基于决策树算法模型结果分析

## 基于支持向量机的模型结果分析

## 基于神经网络的模型结果分析

