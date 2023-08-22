/* eslint-disable no-prototype-builtins */
import { useEco } from "../context/EcoContext";
import { questions } from "../constant";
import RadioInput from "./RadioInput";
import Results from "./Results";

function Questions() {
  const eco = useEco();
  const nextQuestion = (order) => {
    const existIndex = eco.selected.hasOwnProperty(order);
    if (existIndex) {
      // console.log("aqui");
      let next = parseInt(order) + 1;
      eco.setStep(next);
      // console.log(`next : ${next}`);
    } else {
      // console.log("no");
      eco.setError(true);
    }

    // console.log(eco.error);
  };
  const prevQuestion = (order) => {
    let prev = parseInt(order) - 1;
    eco.setStep(prev);
    // console.log(`next : ${prev}`);
  };
  const finish = (order) => {
    const existIndex = eco.selected.hasOwnProperty(order);
    if (existIndex) {
      eco.setPoints(selectedPointsSum);
      eco.setStep(99);
    } else {
      eco.setError(true);
    }
  };

  const selectedPointsSum = Object.values(eco.selected).reduce(
    (accumulator, currentValue) => {
      const split = currentValue.split("-");
      const point = split[1];
      const res = accumulator + parseInt(point);
      return res;
    },
    0
  );

  const renderQuestions = () => {
    return (
      <div className="w-[350px] md:w-[800px] h-screen flex flex-col">
        {/* title seccion */}
        <div className="flex h-20 items-center ">
          <p className="w-full text-white text-2xl">
            Hi, {eco.person}
            {/* points : {selectedPointsSum} */}
          </p>
        </div>
        {/* question and options section */}
        <div className="flex flex-col flex-1  w-full ">
          {questions.map((q, i) => (
            <div className="  w-full flex flex-col items-center justify-center" key={i}>
              {q.order === eco.step ? (
                <>
                  {/* order : {q.order} */}
                  <label className="my-5 text-2xl text-white">{q.question}</label>
                  {q.options.map((o, io) => (
                    <div className=" w-full" key={io}>
                      <RadioInput
                        name="selection"
                        label={o.option}
                        val={`${q.id}${o.id}-${o.value}`}
                        index={q.id}
                      />
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          ))}
        </div>
        {/* error section  */}
        <div className=" flex flex-col items-center justify-end w-full mb-3 font-semibold text-red-900 text-lg">
          {eco.error ? <div>please select an option to continue</div> : null}
        </div>
        {/* botton section  */}
        <div className=" mb-32 flex items-center justify-center gap-4">
          {eco.step > 1 ? (
            <button className="text-white bg-black bg-opacity-20 px-5 py-2 w-52 rounded-md font-semibold text-xl text-slate-700 hover:text-white hover:shadow-xl duration-500 ease-in-out transition" onClick={() => prevQuestion(eco.step)}>Prev</button>
          ) : null}
          {parseInt(eco.step) < parseInt(eco.totalSteps) ? (
            <button className="text-white bg-green-500 bg-opacity-30 px-5 py-2 w-52 rounded-md font-semibold text-xl text-slate-700 hover:text-white hover:shadow-xl hover:bg-green-500 duration-500 ease-in-out transition" type="button" onClick={() => nextQuestion(eco.step)}>
              Next
            </button>
          ) : (
            <button className="text-white bg-blue-500 bg-opacity-30 px-5 py-2 w-52 rounded-md font-semibold text-xl text-slate-700 hover:text-white hover:shadow-xl hover:bg-blue-500 duration-500 ease-in-out transition" type="button" onClick={() => finish(eco.step)}>
              Finished
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderView = () => (eco.step === 99 ? <Results /> : renderQuestions());

  return <div>{renderView()}</div>;
}

export default Questions;
