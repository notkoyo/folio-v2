"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PreLoader() {
  const [showWelcome, setShowWelcome] = useState<boolean>(false);
  const controls = useAnimation();
  const screenControls = useAnimation();

  useEffect(() => {
    document.documentElement.classList.add("overflow-y-hidden");

    const loadingSequence = async () => {
      await controls.start({
        width: "100%",
        transition: { duration: 1.8 },
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
      await screenControls.start({
        y: "-100%",
        transition: { duration: 0.55 },
      });

      document.documentElement.classList.remove("overflow-y-hidden");
    };

    loadingSequence();

    setTimeout(() => {
      screenUp();
    }, 3300);
  }, [controls, screenControls]);

  return (
    <motion.div animate={screenControls} className="h-screen w-screen flex justify-center items-center flex-col bg-[#191815] absolute top-0 left-0 z-[999]">
      <div className={`${showWelcome ? "w-screen flex justify-center" : "w-[18rem]"}`}>
        <motion.div
          animate={controls}
          initial={{
            width: 0,
            height: 12,
            backgroundColor: "#e8e8e8",
            borderRadius: "9999px",
          }}
        />
        {showWelcome && (
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase font-bold text-9xl text-[#e8e8e8]">
            welcome
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
