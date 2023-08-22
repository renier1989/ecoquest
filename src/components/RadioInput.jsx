/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEco } from "../context/EcoContext";


function RadioInput({label, val, index}) {
  const { points, setPoints } = useEco();
    
  const handleChange = ({target})=>{
    console.log(target);
  }

  return <div>
    <label >
        <input type="radio" name={index} id={index} value={val} onChange={()=>handleChange}/>
        {label}
    </label>
  </div>;
}

export default RadioInput;
