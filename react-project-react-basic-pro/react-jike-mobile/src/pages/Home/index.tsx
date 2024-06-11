import { Tabs } from 'antd-mobile'
import './style.css'
import {useEffect, useState} from 'react'
import {fetchChannelAPI, type ChannelItem} from '@/apis/list.ts'
const Home=()=>{
    const [channels,setChannels] =  useState<ChannelItem[]>()

    useEffect(()=>{
        const getChannels =async ()=>{
            try {
                const res =await fetchChannelAPI()
                setChannels(res.data.data.channels)
            } catch (error) {
                throw new Error('fetch channel error')
            }
        }
        getChannels()
    },[])
    return(
        <div>
            <div className="tabContainer">
                {/* tabs区域 */}
                 <Tabs>
                    {channels?.map(item=>{
                        return (
                            <Tabs.Tab title={item.name} key={item.id}>
                                {/*list组件*/}
                            </Tabs.Tab>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
}


export default Home