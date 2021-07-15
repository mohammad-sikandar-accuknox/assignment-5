import React, { useEffect, useState } from "react";
import { RiTimerFill } from "react-icons/ri";
import { sciencedata, technologydata, sportsdata } from "../Data/data";
import { useHistory } from "react-router-dom";

function QuizPlay(props) {
  const [data, setdata] = useState([]);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);
  let history = useHistory();
  useEffect(() => {
    if (props.match.params.type === "science") setdata(sciencedata);
    else if (props.match.params.type === "technology") setdata(technologydata);
    else if (props.match.params.type === "sports") setdata(sportsdata);

    if (
      data.length > 0 &&
      Object.keys(data[count].options).length === count + 1
    )
      history.push(`/result/${count}`);
  }, [data, props.match.params.type, count, history]);
  useEffect(() => {
    if (timer === 0) {
      history.push(`/result/${count}`);
    }
    const timerId = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(timerId);
  }, [timer, history]);
  console.log(data);

  const handleCheckAnswer = (val) => {
    console.log(val);
    if (val) {
      setCount((count) => count + 1);
      setTimer(10);
      console.log(count);
    } else {
      history.push(`/result/${count}`);
    }
  };
  return (
    <>
      <div className=" h-full w-full justify-center ">
        <div className="content-center justify-center text-6xl mt-5 font-black  flex">
          <h1>Timer</h1>
          <RiTimerFill />
        </div>
        <div className="content-center justify-center text-6xl mt-5 font-black  flex">
          <h1>00:{timer}</h1>
        </div>
      </div>

      {data.length > 0 ? (
        <div>
          <div className="content-center justify-center text-2xl mt-5 font-semibold p-4 mt-24 mb-10 flex">
            <div className="bg-purple-300 w-11/12 justify-center flex p-4 rounded-lg">
              <span className="pr-2 pl-2">Q{count + 1}.</span>
              {data[count].q}
            </div>
          </div>
          <div className="mr-8 ml-8">
            <div className="flex justify-evenly flex-wrap">
              {Object.keys(data[count].options).map(function (key) {
                return (
                  <div
                    onClick={() => handleCheckAnswer(data[count].options[key])}
                    key={key}
                    className=" w-2/5 justify-center flex p-4 border-purple-600 border-opacity-100 border-solid border-2 hover:bg-green-100 cursor-pointer rounded-full py-3 px-6 h-15 mb-8"
                  >
                    {key}
                  </div>
                );
              })}
              {/* <div className=" w-2/5 justify-center flex p-4 border-purple-600 border-opacity-100 border-solid border-2 hover:bg-green-100 cursor-pointer rounded-full py-3 px-6 h-15 mb-8">
                adhasfu
              </div>
              <div className=" w-2/5 justify-center flex p-4 border-purple-600 border-opacity-100 border-solid border-2 hover:bg-green-100 cursor-pointer rounded-full py-3 px-6 mb-8">
                adhasfu
              </div>
              <div className=" w-2/5 justify-center flex p-4 border-purple-600 border-opacity-100 border-solid border-2 hover:bg-green-100 cursor-pointer rounded-full py-3 px-6 mb-8">
                adhasfu
              </div>
              <div className=" w-2/5 justify-center flex p-4 border-purple-600 border-opacity-100 border-solid border-2 hover:bg-green-100 cursor-pointer rounded-full py-3 px-6 mb-8">
                adhasfu
              </div> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default QuizPlay;
