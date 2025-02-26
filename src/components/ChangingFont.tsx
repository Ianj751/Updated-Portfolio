import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fonts = [
  "Papyrus",
  "Brush Script MT",
  "Trattatello",
  "Impact",
  "Times New Roman",
];

export default function ChangingFontText() {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 1000); // Change font every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      animate={{ fontFamily: fonts[fontIndex] }}
      transition={{ duration: 0.5 }}
      className="text-8xl text-left mt-10 text-gray-300"
    >
      Ian Jackson
    </motion.h1>
  );
}
