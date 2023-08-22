import { Form as Formm, Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import ButtonContinue from "./ButtonContinue";
import { useEco } from "../context/EcoContext";
import Questions from "./Questions";

function Form() {
  const eco = useEco();
//   console.log(eco);
  const handleContinue = (values) => {
    eco.setPerson(values.name)
    eco.setStep(1);
    // console.log("continuo con la parte de las preguntas y opciones");
    // console.log(eco.step,eco.person);
  };

  const renderForm = () => {
    return (
      <Formik
        initialValues={{
          name: "",
          selection:[]
        }}
        onSubmit={(values)=>handleContinue(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Please enter a name")
            .typeError("Please enter a valid name"),
        })}
      >
        <Formm>
          <Input name="name" label={"Register you Name"} />
          <ButtonContinue type="submit" />
        </Formm>
      </Formik>
    );
  };

  const renderView = () => 
    (
        eco.step >= 1 ? <Questions /> : renderForm()
    )
    

  return (<div>{renderView()}</div>);
}

export default Form;
