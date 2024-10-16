import React, { useState, useEffect} from 'react'

const State = () => {
    
    const [state, setState] = useState(0);

    useEffect(()=>{
        console.log(state);
    },[])

    const handleClick = () =>{
        setState(state+1);
    }

  return (
    <>
    <hr />
      <div>State</div>
      <h1>Contador: {state}</h1>
      <button onClick={handleClick}>+1</button>
      <hr />
    </>
  )
}

export default State
