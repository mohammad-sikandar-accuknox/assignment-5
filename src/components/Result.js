import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Result(props) {
  const { handleUser } = props;
  let history = useHistory();
  useEffect(() => {
    handleUser(false);
  },[handleUser]);

  const handleRedirect = () => {
    history.push(`/`);
  };
  console.log(props.match.params.val);
  return (
    <>
      <div className="container mx-auto my-48">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <div
              className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
              style={{
                backgroundImage:
                  "url( https://images.unsplash.com/photo-1602045486350-4e53a69865c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGhhbmslMjB5b3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 )",
                backgroundBlendMode: "multiply",
              }}
            ></div>
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h4 className="w-full text-xl text-gray-100 leading-tight">
                Score Card
              </h4>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                Result Score
              </h3>
              <p className="text-5xl text-gray-400 text-justify my-8">
                {props.match.params.val * 10} Points
              </p>
              <p
                className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900 hover: cursor-pointer"
                onClick={handleRedirect}
              >
                <span>Play Again</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
