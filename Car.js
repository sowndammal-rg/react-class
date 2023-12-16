export default function Car({carName})
{
    if(carName==="JCB")
    {
        throw new Error("JCB is not car")
    }
    return(
<div>
  {carName}
</div>

    )
}