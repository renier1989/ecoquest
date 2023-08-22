import { useEco } from "../context/EcoContext";
import { questions } from "../constant";
import RadioInput from "./RadioInput";
import Results from "./Results"

function Questions() {
  const eco = useEco();
  const nextQuestion = (order) => {
    let next = parseInt(order) + 1;
    eco.setStep(next);
    console.log(`next : ${next}`);
  };
  const prevQuestion = (order) => {
    let prev = parseInt(order) - 1;
    eco.setStep(prev);
    console.log(`next : ${prev}`);
  };
  const finish = ()=> {
    eco.setStep(99);
  }

  const renderQuestions = ()=> {
    return (
      <div>
        Hi, {eco.person} : points : {eco.points}
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
                      val={o.value}
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
      </div>

    );
  }

  const renderView = () => (
    eco.step === 99 ? <Results /> : renderQuestions()
  )

  return (
    <div>
      {renderView()}
    </div>
  );
}

export default Questions;
