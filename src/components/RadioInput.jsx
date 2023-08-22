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
    <div>
      <label>
        <input
          type="radio"
          name={index}
          id={index}
          checked={selected[index] === val}
          value={val}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
}

export default RadioInput;
