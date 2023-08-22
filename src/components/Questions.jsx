import { useEco } from "../context/EcoContext";
import { questions } from "../constant";
import RadioInput from "./RadioInput";
import Results from "./Results";

function Questions() {
  const eco = useEco();
  const nextQuestion = (order) => {
    const existIndex = eco.selected.hasOwnProperty(order);
    if (existIndex) {
      console.log('aqui');
      let next = parseInt(order) + 1;
      eco.setStep(next);
      console.log(`next : ${next}`);
    } else {
      console.log('no');
      eco.setError(true);
    }

    console.log(eco.error);
  };
  const prevQuestion = (order) => {
    let prev = parseInt(order) - 1;
    eco.setStep(prev);
    console.log(`next : ${prev}`);
  };
  const finish = (order) => {
    const existIndex = eco.selected.hasOwnProperty(order);
    if(existIndex){
      eco.setPoints(selectedPointsSum);
      eco.setStep(99);
    }else{
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
      <div>
        Hi, {eco.person} : points : {selectedPointsSum}
        {questions.map((q, i) => (
          <div key={i}>
            {q.order === eco.step ? (
              <div>
                order : {q.order}
                <label>{q.question}</label>
                {q.options.map((o, io) => (
                  <div key={io}>
                    <RadioInput
                      name="selection"
                      label={o.option}
                      val={`${q.id}${o.id}-${o.value}`}
                      index={q.id}
                    />
                  </div>
                ))}
                <div>
                  {eco.step > 1 ? (
                    <button onClick={() => prevQuestion(q.order)}>Prev</button>
                  ) : null}
                  {parseInt(eco.step) < parseInt(eco.totalSteps) ? (
                    <button type="button" onClick={() => nextQuestion(q.order)}>
                      Next
                    </button>
                  ) : (
                    <button type="button" onClick={() => finish(q.order)}>
                      Finished
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        ))}
        aqui : {eco.error ? <div>please select an option to continue</div> : null}
      </div>
    );
  };

  const renderView = () => (eco.step === 99 ? <Results /> : renderQuestions());

  return <div>{renderView()}</div>;
}

export default Questions;
