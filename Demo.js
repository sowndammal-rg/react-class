
export default function List()
{
    const animals=["dog","cat","lion"]
    const result=animals.map((ani,index)=><li key={index}>{index}=>{ani}</li>)
    return(
        <div>
        <ul type="none">
        {result}
        </ul>
        </div>
    )
}