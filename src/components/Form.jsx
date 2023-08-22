import { Form as Formm, Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import ButtonContinue from "./ButtonContinue";
import { useEco } from "../context/EcoContext";
import Questions from "./Questions";

function Form() {
  const eco = useEco();
  const handleContinue = (values) => {
    eco.setPerson(values.name)
    eco.setStep(1);
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
            .required("Please enter your name")
            .typeError("Please enter a valid name"),
        })}
      >
        <Formm className="w-[350px] md:w-[800px] mb-40">
          <Input name="name" label={"Enter your name"} />
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
