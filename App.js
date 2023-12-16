/*import PropsClass from "./Day4/PropsClass";
import PropsFunctional from "./Day4/PropsFunctional";
import PropsFunctionalEx1 from "./Day4/PropsFunctionalex1";
import ArrowProps from"./Day4/ArrowProps";
import StateClassCom from "./Day4/StateClassCom";
import StateFunction from"./Day4/StateFunction";
import StateHoldObject from "./Day4/StateHoldObject";
import ParentChildCommunication from"./Day4/ParentChildCommunication";
import DynamicRendering from "./Day4/DyanmicRendering";
import TwoWayBinding from "./Day4/TowWayBinding";
import DefaultProps from "./Day4/DefaultProps";*/
 import KeyList from "./Day 6/KeyList";
 import Demo from "./Day 6/Demo";
 
 
import ErrorBoundary from "./Day 8/ErrorBoundary";
import Car from "./Day 8/Car";
//import TryCatch from "./Day 8/TryCatch";
import ComponentLifeCycle from "./Day 8/ComponentLifeCycle";
import LifecycleFunctional from "./Day 8/LifeFunctional";
export default function App()
{
    return (
        <div>
        <KeyList></KeyList>
   <Demo></Demo>
   <ErrorBoundary><Car carName="thar"></Car></ErrorBoundary>
   <ErrorBoundary><Car carName="JCB"></Car></ErrorBoundary>
   
   <ComponentLifeCycle></ComponentLifeCycle>
   <LifecycleFunctional></LifecycleFunctional>
   
   </div>
    )

}
   /*<PropsFunctional name="abarna"></PropsFunctional>
   <PropsClass college="SKCT"></PropsClass>
   <PropsFunctionalEx1 college="skct" place="coimbatore"></PropsFunctionalEx1>
   <ArrowProps place="India"></ArrowProps>
   <StateClassCom></StateClassCom>
   <StateFunction></StateFunction>
   <StateHoldObject></StateHoldObject>
   <ParentChildCommunication></ParentChildCommunication>
   <DynamicRendering></DynamicRendering>
   <TwoWayBinding></TwoWayBinding>
   <DefaultProps></DefaultProps>
   <KeyList></KeyList>
   <Demo></Demo>
   </div>
    )

}*/