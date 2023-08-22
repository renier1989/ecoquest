/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEco } from "../context/EcoContext";

function RadioInput({ label, val, index }) {
  const { selected, setSelected, setError } = useEco();

  const handleChange = ({ target }) => {
    setSelected((prevPoints) => ({
      ...prevPoints,
      [index]: val,
    }));
    setError(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label className=" w-full flex flex-col justify-center text-center cursor-pointer space-y-3">
        <input
          className="hidden peer "
          type="radio"
          name={index}
          id={index}
          checked={selected[index] === val}
          value={val}
          onChange={handleChange}
        />
        <div className="text-white  font-semibold py-5 border border-white rounded-lg 
        peer-checked:bg-green-700 
        peer-checked:bg-opacity-59 
        peer-checked:border-dashed
        peer-checked:border-2
        peer-checked:transition
        peer-checked:duration-500
        peer-checked:shadow-md
        peer-checked:italic

        ">{label}</div>
      </label>
    </div>
  );
}

export default RadioInput;
