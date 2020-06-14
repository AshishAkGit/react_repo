import React, { useState } from 'react'

//React Hook with state variable as an Object.
function HookCounterThree() {
    const [name, setName] = useState({firstname:'',lastname:''})
    return (
        <div>
            <form>
                <label>First Name:</label>
                <input type="text" 
                value={name.firstname} 
                onChange={event => setName({...name,firstname:event.target.value})}/>
                 <label>Last Name:</label>
                <input type="text" 
                value={name.lastname} 
                onChange={event => setName({...name,lastname:event.target.value})}/>
                <h2>Your first name is : {name.firstname}</h2>
                <h2>Your Last name is : {name.lastname}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>            
        </div>
    )
}

export default HookCounterThree
