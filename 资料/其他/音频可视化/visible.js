/*
 * @Author: 41
 * @Date: 2022-03-14 16:51:18
 * @LastEditors: 41
 * @LastEditTime: 2022-04-21 15:29:53
 * @Description: 
 */
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();                                //实例化AudioContext对象
let analyser = audioContext.createAnalyser();                         //实例化analyser对象
let audio = document.querySelector('.audio')                          //获得audio节点
let audioSrc = audioContext.createMediaElementSource(audio);          //从audio中获取声音源文件
let bo = document.querySelector('.bo')                                //获取节点
let bo2 = document.querySelector('.bo2')                              //获取节点
let bo3 = document.querySelector('.bo3')                              //获取节点
let bo4 = document.querySelector('.bo4')                              //获取节点
let bo5 = document.querySelector('.bo5')                              //获取节点                                                          //保存上一个值
audioSrc.connect(analyser);                                           //声源绑定analyser分析
analyser.connect(audioContext.destination);                           //analyser绑定所有音频的最终节点，达成双向绑定吧
const canvas = document.querySelector('.canvas');                     //获取画布节点
const ctx = canvas.getContext('2d');                                  //获取画布上下文
const canvas2 = document.querySelector('.canvas2');                   //获取画布节点2
const ctx2 = canvas2.getContext('2d');                                //获取画布上下文2
const canvas3 = document.querySelector('.canvas3');                   //获取画布节点2
const ctx3 = canvas3.getContext('2d');                                //获取画布上下文2
const WIDTH = canvas.width;                                           //画布宽度
const HEIGHT = canvas.height;                                         //画布高度
const WIDTH2 = canvas2.width;                                         //画布宽度2
const HEIGHT2 = canvas2.height;                                       //画布高度2
const WIDTH3 = canvas3.width;                                         //画布宽度3
const HEIGHT3 = canvas3.height;                                       //画布高度3
const colorList = [                                                   //画布颜色数组
  "#3498db",
  "#27ae60",
  "#e67e22",
  "#9b59b6",
  "#7f8c8d",
];
audioContext.resume()
/**
 * @description: 定时器1:控制头像跟随音频跳舞
 * @param1 {*}
 * @return {*}
 * @detail: 
 */
setInterval(() => {
  analyser.fftSize = 64;                                      // 按照64采样
  let dataArray = new Uint8Array(analyser.frequencyBinCount); // 申请数组
  //  analyser.getByteFrequencyData(dataArray);               // 可选：频域信号，下面是时域信号
  analyser.getByteTimeDomainData(dataArray)                   // 先获取data
  let arr = [...dataArray]                                    // 新数组扩展,这样才能有负数
  let sum = 0, left, right, dis = 80                          // 用来控制旋转的控制值                  
  /***************数据处理：对称轴变为0然后求出控制值并求余 */
  arr = arr.map((item) => {
    return item - 128
  })
  arr.forEach(item => {
    sum += item
  })
  /**************************************************************** */
  sum = sum % 360
  left = sum % 50 - 50
  right = sum % 50 - 50
  /***************************得出控制值后,检测是否播放，然后来控制移动 */
  if (audio.paused) {
    bo.style.transform = "translate(" + left + "%," + right + "%) "
    bo2.style.transform = "translate(" + (left) + "%," + (right) + "%) "
    bo3.style.transform = "translate(" + (left) + "%," + (right) + "%) "
    bo4.style.transform = "translate(" + (left) + "%," + (right) + "%) "
    bo5.style.transform = "translate(" + (left) + "%," + (right) + "%) "
  } else {
    bo.style.transform = "translate(" + left + "%," + right + "%) rotate(" + sum + "deg)"
    bo2.style.transform = "translate(" + (left - dis) + "%," + (right - dis) + "%) rotate(" + sum + "deg)"
    bo3.style.transform = "translate(" + (left + dis) + "%," + (right - dis) + "%) rotate(" + sum + "deg)"
    bo4.style.transform = "translate(" + (left + dis) + "%," + (right + dis) + "%) rotate(" + sum + "deg)"
    bo5.style.transform = "translate(" + (left - dis) + "%," + (right + dis) + "%) rotate(" + sum + "deg)"
  }
}, 300)
/**
 * @description: 定时器2:控制条形图随音频变化
 * @param1 {*}
 * @return {*}
 * @detail: 
 */
setInterval(() => {
  let sum = 0
  analyser.fftSize = 2048;                                       // 按照2048采样,微积分关系。点多看着丝滑
  let dataArray = new Uint8Array(analyser.frequencyBinCount);    // 申请数组
  // analyser.getByteFrequencyData(dataArray);                   // 同上，频域采样，下面是我们使用的时域采样
  analyser.getByteTimeDomainData(dataArray)                      // 扩展运算,方便处理
  let arr = [...dataArray]
  /***************数据处理：然后进行canvas画图 */
  arr = arr.map((item) => {
    sum += item - 128
    return item - 128
  })
  sum /= arr.length
  sum *= 60
  // console.log(sum, last);
  draw(arr)
  renderFrame(sum);
}, 100);
/**
 * @description: 画条形图的函数
 * @param1 {*}
 * @return {*}
 * @detail: 
 * @param {*} dataArray 时域采样数组
 */
function draw (dataArray) {
  // 值太低，图不好看，+100
  if (typeof dataArray != 'object') {
    dataArray = []
  }
  dataArray = dataArray.map((item) => {
    return item + 100
  })

  var barWidth = WIDTH / analyser.frequencyBinCount * 1.5              // 计算每个小柱子的宽度
  ctx.clearRect(0, 0, WIDTH, HEIGHT);                                  // 清屏
  for (let i = 0, x = 0; i < dataArray.length; i++) {
    barHeight = dataArray[i]                                           // 赋予高度
    ctx.fillStyle = colorList[barHeight % 4]                           // 赋予颜色
    ctx.fillRect(x, (HEIGHT - barHeight) / 30, barWidth, barHeight)    // 画出小条形图
    x += barWidth + 1
  }
}
/**
 * @description: 气泡渲染
 * @param1 {*}
 * @return {*}
 * @detail: 
 */
function renderFrame (sum) {
  if (sum < 0) sum *= -1
  if (sum > 0) sum *= 0.7
  if (sum > 75) sum = 75
  ctx2.clearRect(0, 0, WIDTH2, HEIGHT2)
  ctx2.beginPath();
  ctx2.arc(150, 75, sum, 2 * Math.PI, false);
  ctx2.fillStyle = colorList[(Math.random() * 1000 % 4) >> 0]
  ctx2.fill()
  ctx3.clearRect(0, 0, WIDTH3, HEIGHT3)
  ctx3.beginPath();
  ctx3.arc(150, 75, sum, 2 * Math.PI, false);
  ctx3.fillStyle = colorList[(Math.random() * 1000 % 4) >> 0]
  ctx3.fill()
}
window.requestAnimationFrame(renderFrame)
window.requestAnimationFrame(draw)
