import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class MouseClickCounter extends Component {
   
    render() {
        const {count,incrementCount,name}= this.props

        return (
            <div>
                {/* <h2> Count : {count}</h2>  */}
               {name} <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default WithCounter(MouseClickCounter,5)
