'use client';
import { useState, useEffect } from "react";
type TypeWriterProps = {
  textArr: string[];
  delay: number;
  styles: string;
};
const Typewriter = (props: TypeWriterProps) => {
  const { textArr, delay, styles } = props;
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextArrayIndex, setCurrentTextArrayIndex] = useState(0);
  useEffect(() => {
    if (currentTextArrayIndex < textArr.length) {
      if (currentIndex < textArr[currentTextArrayIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + textArr[currentTextArrayIndex][currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }else{
        if(currentTextArrayIndex < textArr.length - 1){
          setCurrentIndex(0);
          setCurrentText("");
          setCurrentTextArrayIndex((prev) => prev + 1);
        }
      }
    }
    
  }, [currentIndex, delay, textArr, currentTextArrayIndex]);
  return <span className={styles}>{currentText}</span>;
};

export default Typewriter;
