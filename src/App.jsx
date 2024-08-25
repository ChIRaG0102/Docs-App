import React, { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import { motion } from "framer-motion"

const App = () => {

  const [display, setdisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setdisplay(false);
    }, 3600);
  }, []);

  return (
    <>
      <div className="main w-full h-screen overflow-hidden bg-zinc-800 relative flex justify-center items-center">
        <h1 className="text-zinc-950 text-9xl font-medium">Docs.</h1>
        {display ? (
          <motion.h1 initial={{opacity:1,scale:1}} animate={{opacity:0.1,scale:0.1}} transition={{ duration: 5, delay:0.8}} className="boxxer absolute p-3 bg-zinc-900 rounded-lg text-[1.3rem] font-semibold text-white">
            You Can Drag these Boxes.
          </motion.h1>
        ) : null }
        <Wrapper />
      </div>
    </>
  );
};

export default App;
