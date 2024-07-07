"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PreLoader() {
  const [showWelcome, setShowWelcome] = useState<boolean>(false);
  const controls = useAnimation();
  const screenControls = useAnimation();

  useEffect(() => {
    const loadingSequence = async () => {
      await controls.start({
        width: 384,
        transition: { duration: 2.3 },
      });
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });
      await controls.start({
        display: "none",
      });
      setShowWelcome(true);
    };

    const screenUp = async () => {
      await screenControls.start((i: number) => ({
        y: "-100%",
        transition: { duration: 0.6, delay: 0.06 * i },
      }));

      document.documentElement.classList.remove("overflow-y-hidden");
    };

    loadingSequence();

    setTimeout(() => {
      screenUp();
    }, 2800);
  }, [controls, screenControls]);

  return (
    <div className="h-screen w-screen flex justify-center items-center absolute top-0 left-0 z-[999]">
      {Array.from({ length: 10 }, (_, i) => i++).map((element, i) => (
        <motion.div
          key={i}
          animate={screenControls}
          custom={i}
          className="h-[105vh] w-[10vw] bg-[#191815]"
        />
      ))}
      <div
        className={`absolute h-screen w-screen top-0 left-0 flex justify-center items-center`}>
        <div className={`${showWelcome && "hidden"} w-[24rem]`}>
          <motion.div
            animate={controls}
            initial={{
              width: 0,
              height: 12,
              backgroundColor: "#e8e8e8",
              borderRadius: "9999px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

{
  /* 

  <div
        className={`${showWelcome ? "w-screen flex justify-center" : "w-[18rem]"}`}>
        <motion.div
          animate={controls}
          initial={{
            width: 0,
            height: 12,
            backgroundColor: "#e8e8e8",
            borderRadius: "9999px",
          }}
        />
        {showWelcome &&
          ["w", "e", "l", "c", "o", "m", "e"].map((letter, i) => (
            <motion.span
              variants={welcomeAnim}
              custom={i}
              initial="initial"
              animate="animate"
              className="uppercase font-bold text-9xl text-[#e8e8e8]">
              {letter}
            </motion.span>
          ))}
      </div>
  
*/
}
