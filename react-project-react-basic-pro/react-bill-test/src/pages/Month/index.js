import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import DailyBill from './components/DailyBill'
const Month = () => {
  // 按月做数据的分组
  const billList =useSelector(state => state.bill.billList)
  // useMemo相当与 vue中的计算属性
  const monthGroup = useMemo(()=>{
    // return出去计算之后的值
    return _.groupBy(billList,(item)=> dayjs(item.date).format('YYYY-MM'))
  },[billList])
  // console.log(monthGroup)

  // 控制弹窗的打开和关闭   
  const [dateVisible,setDateVisible] =useState(false)

  //控制时间显示
  const [currentDate,setCurrentDate] =useState(()=>{
    return dayjs(new Date()).format('YYYY-MM')
  })


  const [currentMonthList,setCurrentMonthList] = useState([])
  //初始化的时候把当前月的统计数据显示出来
  useEffect(()=>{
    const nowDate =dayjs().format('YYYY-MM')
    if(monthGroup[nowDate])
      setCurrentMonthList(monthGroup[nowDate])
  },[monthGroup])
  const monthResult = useMemo(()=>{
    if(!currentMonthList){
      return {
        pay:0,
        income:0,
        total:0
      }
    }
    //  支出 / 收入 / 结余
   const pay =  currentMonthList.filter(item=>item.type === 'pay').reduce((a,c)=> a+c.money ,0)
   const income =  currentMonthList.filter(item=>item.type === 'income').reduce((a,c)=> a+c.money ,0)
   return{
    pay,
    income,
    total:pay+income
   }
  },[currentMonthList])
  // 确认回调
  const onConfirm =(date)=>{
    setDateVisible(false)

    const formatDate = dayjs(date).format('YYYY-MM')
    // console.log(formatDate)
    setCurrentDate(formatDate)

    // console.log(monthGroup[formatDate])
    setCurrentMonthList(monthGroup[formatDate])
    console.log(currentMonthList)
  }


  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div onClick={()=>setDateVisible(true)} className="date">
            <span className="text">
              {currentDate} | 3月账单
            </span>
            <span className={classNames('arrow',dateVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={()=>setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={()=>setDateVisible(false)}
            max={new Date()}
          />

        </div>
          {/* 单日列表统计 */}
          <DailyBill></DailyBill>
      </div>
    </div >
  )
}

export default Month