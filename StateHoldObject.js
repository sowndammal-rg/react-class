import React,{useState} from 'react'
export default function StateHoldObject()
{
    const[college,setCollege]=useState({cid:1,cname:"skct",year:2023})
    const changeyear=()=>setCollege((prevState)=>{return{...prevState,year:2024}})
    const changename=()=>setCollege((prevState)=>{return{...prevState,cname:"sri krishna"}})
    return(
        <div>
        <h1>my collage id is {college.cid}</h1>
        <h1>collage name is {college.cname}</h1>
        <h1>year {college.year}</h1>
        <button onClick={changeyear}>change year</button>
        <button onClick={changename}>change name</button>
        </div>

    )
}
