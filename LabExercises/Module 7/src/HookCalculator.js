import React, {useState} from 'react'

export default function HookCalculator() {
  
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [result, setResult] = useState(0)

    const addition=() =>{
        setResult(parseInt(first)+parseInt(second))
    }

    const subtraction=() =>{
        setResult(parseInt(first)-parseInt(second))
    }

    const multiplication=() =>{
        setResult(parseInt(first)*parseInt(second))
    }

    const division=() =>{
        setResult(parseInt(first)/parseInt(second))
    }

    // const clearNumbers=()=>{
    //     setResult(0),
    //     setFirst(0),
    //     setSecond(0)
    // }
  
    return (
    <div><div><label>First number:</label></div>
    <div><input type="number" name="first" value={first} onChange={e=>setFirst(e.target.value)}/></div>
    <div><button onClick={addition}>Add</button>
    <button onClick={subtraction}>Sub</button>
    <button onClick={multiplication}>Mul</button>
    <button onClick={division}>Div</button>
    {/* <button onClick={clearNumbers}>CLR</button> */}
    </div>
    <div><label>Second number:</label></div>
    <div><input type="number" name="second" value={second} onChange={e=>setSecond(e.target.value)}/></div>
    <h1>Result {result}</h1></div>
  )
}
