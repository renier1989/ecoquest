/* eslint-disable react/prop-types */
import { useField } from "formik";

function Input({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col items-center">
      <div className="mb-16 text-white text-5xl font-semibold">
        EcoQuiz 🌿
      </div>
      <label className="mb-4 text-white font-semibold text-2xl">{label}</label>
      <input {...field} {...props} autoComplete="off" className="border border-2 border-green-400 w-full py-2 rounded-lg outline-none px-4 font-semibold text-stone-500 "/>
      {meta.touched && meta.error ? (
        <div>
          <span className="font-semibold text-red-900 text-lg">{meta.error}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Input;
