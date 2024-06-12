import { Tabs } from 'antd-mobile'
import './style.css'
import {useTabs}from './useTabs'
import HomeList from './HomeList'
const Home=()=>{
    const {channels} = useTabs()
    return(
        <div>
            <div className="tabContainer">
                {/* tabs区域 */}
                 <Tabs>
                    {channels?.map(item=>{
                        return (
                            <Tabs.Tab title={item.name} key={item.id}>
                                {/*list组件*/}
                                {/* 别忘嘞加上类名严格控制滚动盒子 */}
                                <div className='listContainer'>
                                    <HomeList channelId={ ''+ item.id}></HomeList>
                                </div>
                            </Tabs.Tab>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
}


export default Home