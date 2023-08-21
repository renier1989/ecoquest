import { useEco } from "../context/EcoContext";

function Questions() {
    const eco = useEco();
  return (
    <div>
      <div>
        Hi, {eco.person}
        This Will be the part where the user see the questions and select some
        options

      </div>
    </div>
  );
}

export default Questions;
