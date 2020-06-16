import React, { Component } from 'react'

//Child class 
class Input extends Component {

    constructor(props) {
        super(props)
        this.inutRef = React.createRef()
    }

    focusInput = () =>{
        this.inutRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <label> Input text</label>
                <input type="text" ref="inputRef"/>
            </div>
        )
    }
}

export default Input
