import React from 'react'

export default function TryCatch({fruit}) {
    try{
if(fruit==="Oninon")
{
    throw new Error("not a fruit")
}

    }
    catch(error){
console.log("not a fruir");
document.write(error)

    }
    finally{
        document.write("always executed")
    }
  return (
    <div>
      {fruit}
    </div>
  )
}
