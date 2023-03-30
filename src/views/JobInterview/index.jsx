import React from 'react'

const JobInterview = () => {
  return (
    <div>
        <h1>面试题</h1>
        <h2>HTTP相关内容</h2>
        <h3>地址栏输入 URL 到页面展现都经历了哪些过程？</h3>
        <p> 1:浏览器解析url地址;<br />
            2:浏览器查看本地有没有缓存，并对比缓存是否过期；<br />
            3.DNS解析url的到当前ip;<br/>
            4:建立TCP链接，进行三次握手；<br />
            5:发起HTTP请求；<br />
            6.服务器进行响应，返回给浏览器数据<br/>
            7:浏览器收到HTTP响应，解析并渲染页面<br/>
            8.关闭TCP链接
            </p>
    </div>
  )
}

export default JobInterview