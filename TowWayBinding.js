import React,{useState} from 'react'
export default function TwoWayBinding()
{
    const[name,setName]=useState("");
    const changeName=(event)=>setName(event.target.value)
    return(
        <div>
        Two way binding
        <input onChange={changeName} value={name}></input>
        <h1>the name is {name} </h1>
        </div>
    )
}