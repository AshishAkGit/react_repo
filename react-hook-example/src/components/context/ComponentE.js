import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {channelContext, userContext} from '../../App'


function ComponentE() {

    const user = useContext(userContext)
    const channel = useContext(channelContext)

    return (
        <div>
           {user} - {channel}
            <ComponentF/>
        </div>
        
    )
}

export default ComponentE
