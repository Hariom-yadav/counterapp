import { useState } from "react";
import "./App.css";

function App() {
  const [count,setCount]= useState(0);
 
  function incriment_handler(){
      setCount(count+1);
  }
  
  function decriment_handler(){
    setCount(count-1);
}
function reset_handler(){
  setCount(0);
}
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151] gap-5">
      <div className="font-serif font-semibold flex justify-center items-center text-[#0398d4] " >Incriment And Decriment</div>
      
      <div className="flex justify-center items-center gap-5  bg-[#FFFFFF]">
              <div className=" font-medium text-3xl border-r-2 gap-10 border-gray-400 py-2.5 px-7 " >
                <button  onClick={decriment_handler} >-</button></div>
              
              <div className="py-4 text-3xl font-medium" >{count}</div>
              
              <div className="font-medium text-3xl border-l-2 border-gray-400 px-7 py-2.5" >
              <button  onClick={incriment_handler}>+</button></div>
      </div>
     
      <div  className="flex justify-center items-center text-[#FFFFFF] bg-[#0398d4]  border-gray-500  border-1 px-5 py-1.5">
      <button  onClick={reset_handler}>Reset</button></div>
    </div>
    
  );
}

export default App;
