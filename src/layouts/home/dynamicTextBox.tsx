import React from "react";
import { motion } from "framer-motion";

interface DynamicTextBoxProps {
  x: number;
  y: number;
  title: string;
  body: string;
}

const DynamicTextBox: React.FC<DynamicTextBoxProps> = ({ x, y, title, body }) => {
  return (
    <motion.div
      className="mt-25 absolute h-70 w-[40rem] rounded-2xl text-white px-6 py-[38px]
                 flex flex-col justify-center"
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
    >
      <h3 className="text-[48px] text-center font-bold mb-5 text-blue-500">{title}</h3>
      <p className="text-[18px] text-justify text-cente leading-relaxed text-black opacity-95">{body}</p>
    </motion.div>
  );
};

export default DynamicTextBox;
