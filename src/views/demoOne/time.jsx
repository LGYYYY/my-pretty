import React, { Component } from 'react'

export default class time extends Component {
    constructor(props){
        super(props)
        this.state={
            date:new Date()
        }
    }

    componentDidMount(){//会在组件已经被渲染到 DOM 后运行
        this.timerID = setInterval(()=>{
            this.tick()
        },1000)
    }

    componentWillUnmount(){//会在组件卸载及销毁之前直接调用  不能调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
        <div>
            {/* <p>时间：{this.state.date.toLocaleTimeString()}</p> */}
            <p>时间：{this.state.date.toLocaleString()}</p>
            {/* toLocaleTimeString()	根据本地时间格式，把 Date 对象的时间部分转换为字符串。
            toLocaleString()	根据本地时间格式，把 Date 对象转换为字符串。 */}
        </div>
        )
    }
}
