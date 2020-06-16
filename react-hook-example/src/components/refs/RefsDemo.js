import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props) {
        super(props)
        //compoent approach
      this.inputRef = React.createRef()
      //callback approach
      this.cbRef=null
      this.setCbRef = element=>{
        this.cbRef=element
      }
    }

    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus()

        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    
    clickHandler=()=>{
       // alert(this.inputRef.current.value)
       alert(this.cbRef.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
