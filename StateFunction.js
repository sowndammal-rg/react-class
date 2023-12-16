import {useState} from "react" 
export default function StateFunction(){
const [CarName,setCarName]=useState("Thar");
const changeCarName=()=>setCarName("BMW")
const [count,setCount]=useState(0);
const changeCount=()=>setCount(count+1)
const deCount=()=>setCount(count-1)

return(

    <div>
    <h1> my car name is {CarName}</h1>
    <button onClick={changeCarName}>click me</button>
    <h1>Count{count}</h1>
    <button onClick={changeCount}>increament</button>
    <button onClick={deCount}>decrement</button>
    </div>
)


}