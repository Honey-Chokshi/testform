import React, { useState } from 'react';


const App = () =>
{

    const [name,setName]=useState("");
    const[fullName,setFullname]=useState("");
    
    const inputEvent =(event) =>{
        setName(event.target.value);
    }
   
    const onSubmit =(e) =>{
        e.preventDefault();
        return setFullname(name);
    }
    return(
    <>
    <form onSubmit={onSubmit}>      
      <div className="main-container">
         <h1>Hello {fullName}</h1>
         <div className="form-data">
            <input type="text" onChange={inputEvent} value={name} placeholder="enter you first name"></input>
         
            <button type="submit">Click me 👍</button>
     </div>
     </div>
    </form>

     </>
    );
   
}
export default App;