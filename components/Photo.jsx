"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] mix-blend-lighten absolute"
          style={{
            transform: "translate(-50%, -40%) translateY(15px)", // Adjusted these values to bring the photo up
            top: "40%", // Adjusted these values to bring the photo closer to the top
            left: "50%",
          }}
        >
          <Image
            src="/assets2/photo3.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[380px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: "-50px" }} // Adjusted the margin to bring the circle up
        >
          <motion.circle
            cx="253"
            cy="253"
            r="175"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
