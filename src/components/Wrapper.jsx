import React, { useRef } from "react";
import Data from "./Data";

const Wrapper = () => {
  const ref = useRef(null)
  return (
    <>
      <div ref={ref} className="wrapper w-full h-screen absolute p-7 flex flex-shrink-0 flex-wrap gap-5">
        <Data refer = {ref}/>
      </div>
    </>
  );
};

export default Wrapper;
