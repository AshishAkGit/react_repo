import React from 'react'

//HOC component
const WithCounter = (OriginalComponent,incrementNumber)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        incrementCount=()=>{
            this.setState((prevState)=>{
                return {count: prevState.count + incrementNumber}
            })
        }
        
        render(){
            console.log(this.props.name)
            return(
            <div>
              <OriginalComponent  
              count={this.state.count} 
              incrementCount={this.incrementCount}
              {...this.props}/>
            </div>
            )
        }
       
    }
    return NewComponent;
}
export default WithCounter;