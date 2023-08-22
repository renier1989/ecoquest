/* eslint-disable react/no-unescaped-entities */
import { useEco } from "../context/EcoContext";

function Results() {
  const { points, person } = useEco();
  const renderIcon = () => {
    if (points <= 4) {
      return (<span className="text-4xl">🥀</span>);
    } else if (points >= 5 && points <= 7) {
      return (<span className="text-4xl">😃</span>);
    } else {
      return (<span className="text-4xl">🌟</span>);
    }
  };
  return (
    <>
      {/* person points  */}
      <div className=" border border-white border-dashed rounded-lg md:w-[400px] flex  flex-col items-center ">
        <div className="flex flex-col items-center py-2 w-full text-white text-lg font-semibold pt-2">
          Thanks for your Participation
          <p>{person}</p>
        </div>
        <div className="flex flex-col items-center  py-4 w-full text-white justify-center">
          <p className="text-5xl">Points {renderIcon()} </p>
          <p className="text-7xl">{points}</p>
        </div>
      </div>
      {/* points reference  */}
      <div className="border border-white border-dashed rounded-lg flex flex-col px-4 py-2 gap-3 mt-5">
        <div className="flex text-white font-semibold">
          <span className="w-[50%] text-xl flex items-center justify-end">
            [0 - 4]:
          </span>
          <span className="w-full ml-4 flex items-center justify-start">
            Need to Improve
          </span>
        </div>
        <div className="flex text-white font-semibold">
          <span className="w-[50%] text-xl flex items-center justify-end">
            [5 - 7]:
          </span>
          <span className="w-full ml-4 flex items-center justify-start">
            Good Job, you're almost there.
          </span>
        </div>
        <div className="flex text-white font-semibold">
          <span className="w-[50%] text-xl flex items-center justify-end">
            [8 - 10]:
          </span>
          <span className="w-full ml-4 flex items-center justify-start">
            Excelente, You're EcoFriendly.</span>
        </div>
      </div>
    </>
  );
}

export default Results;
