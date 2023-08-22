import { useEco } from "../context/EcoContext";

function Results() {
  const { points, person } = useEco();
  return (
    <>
      <div>{person} Your Result was : ({points})</div>
    </>
  );
}

export default Results;
