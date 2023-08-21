/* eslint-disable react/prop-types */
import { useField } from "formik";

function Input({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label>{label}</label>
      <input {...field} {...props}  className="border border-2 border-green-400"/>
      {meta.touched && meta.error ? (
        <div>
          <span className="font-semibold text-red-400">{meta.error}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Input;
