import React, { Component } from 'react'

export class MethodsRecord extends Component {
  render() {
    return (
      <div>
        <div>
           <p>parseFloat()函数，函数解析字符串并返回浮点数，此函数确定指定字符串中的第一个字符是否为数字。如果是，它会解析字符串直到到达数字的末尾，并将数字作为数字而不是字符串返回。注意：只返回字符串中的第一个数字！</p>
           <p>栗子：{parseFloat('100')},{parseFloat('h100')},{parseFloat('100a')}</p>
        </div>

      </div>
    )
  }
}

export default MethodsRecord