import React, { useState,useEffect } from 'react'

function HookEffectCounter1() {

    const [count,setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
      
    })

    return (
        <div>
         <button onClick={prevCount=>setCount(prevCount => prevCount + 1)}> clicked {count} times</button>  
        </div>
    )
}

export default HookEffectCounter1
