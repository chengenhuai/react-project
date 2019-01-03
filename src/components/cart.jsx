import React, { Component } from 'react'
import {connect} from "react-redux"

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            summry:0,
            city:null
        }
    }
    componentDidMount(){
        this.props.fetchData()
    }
    TotalCount(){
        var paramsCount = 0;
        this.props.list.map((item,index)=>{
            if(item.isChecked){
                paramsCount+=item.count
            }
        })
        return paramsCount;
    }
    TotalSummry(){
        var paramsSum = 0;
        this.props.list.map((item,index)=>{
            if(item.isChecked){
                paramsSum+=item.count*item.max_price
            }
        })
        return paramsSum;
    }
    location(){
        let script = document.createElement('script');
        script.src = 'http://pv.sohu.com/cityjson?ie=utf-8'
        document.body.appendChild(script)
        script.onload = () =>{
            this.setState(item=>({
                city:window.returnCitySN.cname
            }))
        }
    }
    render() { 
        let {list} = this.props
        return <div className='section-content'>
            <p onClick={()=>this.location()}>定位:{this.state.city}</p>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li key={index}>
                            <div>
                                <input type="checkbox" checked={item.isChecked} onChange={()=>this.props.isChecked(index)}/>
                            </div>
                            <dl>
                                <dt>
                                    <img src={item.url} alt=""/>
                                </dt>
                                <dd>
                                    <p>{item.name}</p>
                                    <p>{item.max_price}万元</p>
                                    <p>
                                        <span onClick={()=>this.props.ReduceCount(index)}>-</span>
                                        <span>{item.count}</span>
                                        <span onClick={()=>this.props.AddCount(index)}>+</span>
                                    </p>
                                </dd>
                            </dl>
                        </li>
                    })
                }
            </ul>
            <div className='section-content-bottom'>
                <span>当前总量为:{this.TotalCount()}辆</span>
                <span>当前总额为:{this.TotalSummry()}万元</span>
            </div>
        </div>
    }
}
var data = []
const mapToStateProps = (state)=>{
    return state;
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchData:()=>{
            fetch('/carlist.json').then(res=>res.json()).then(body=>{
                data = body;
                dispatch({
                    type:'LIST_DATA',
                    payload:body
                })
            })
        },
        isChecked:(index)=>{
            dispatch({
                type:'CHANGE_INDEX',
                payload:index
            })
        },
        ReduceCount:(index)=>{
            if(data[index].count<1){
                return;
            }
            dispatch({
                type:'REDUCE_LIST',
                payload:index
            })
        },
        AddCount:(index)=>{
            dispatch({
                type:'ADD_LIST',
                payload:index
            })
        }
    }
}

export default connect(mapToStateProps,mapDispatchToProps)(Cart)