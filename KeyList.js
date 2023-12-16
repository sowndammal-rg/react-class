/*import React from 'react'
function DisplayName(props)
{
    return(
        <div>
        <h1>{props.name}</h1>
        </div>
    )
}
export default function KeyList(){
const studentName=["abarna","aswin","hari"]
const stName=studentName.map((stu)=><DisplayName name={stu}></DisplayName>)
return(
    <div>
    {stName}
    </div>
)
}*/
import React from 'react'

export default function KeyList() {
    const college=[{id:1,stuName:"abarna",age:19},{id:2,stuName:"aswin",age:19},{id:3,stuName:"hari",age:15}]
    const display=college.map((col)=><li key={col.id}>{col.stuName}{col.age}</li>)
  return (
    <div style={{backgroundColor:"purple"}}>
      <h1>List of Students</h1>
      {display}
    </div>
  )
}
