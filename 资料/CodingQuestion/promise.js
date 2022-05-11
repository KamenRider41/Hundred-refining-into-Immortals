/*
 * @Author: 41
 * @Date: 2022-04-06 11:31:29
 * @LastEditors: 41
 * @LastEditTime: 2022-04-06 17:40:19
 * @Description: 
 */
class Commitment {
  static PENDING = '待定'
  static FULFILED = '成功'
  static REJECTED = '拒绝'
  constructor(func) {
    this.status = Commitment.PENDING
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    // func(this.resolve.bind(this), this.reject.bind(this))
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve (result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.FULFILED
        this.result = result
        this.resolveCallbacks.forEach(callback => {
          callback(result)
        })
      }
    })
  }
  reject (result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.REJECTED
        this.result = result
        this.rejectCallbacks.forEach(callback => {
          callback(result)
        })
      }
    });
  }
  then (onFULFILED, onREJECTED) {
    return new Commitment((resolve, reject) => {
      onFULFILED = typeof onFULFILED === 'function' ? onFULFILED : () => { }
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { }
      if (this.status === Commitment.PENDING) {
        this.resolveCallbacks.push(onFULFILED)
        this.rejectCallbacks.push(onREJECTED)
      }
      if (this.status === Commitment.FULFILED) {
        setTimeout(() => {
          onFULFILED(this.result)
        })
      }
      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          onREJECTED(this.result)
        })
      }
    })
  }
}


let commitment = new Commitment((res, rej) => {
  res('这次一定')
})
commitment.then(
  result => { console.log(result); },
  result => { console.log(result.message); }
).then(
  result => { console.log(result); },
  result => { console.log(result.message); }
)
