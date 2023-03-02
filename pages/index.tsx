import { useState } from "react";
import { colorList, ColorSet } from "./data";

export default function Home() {
  const [backgroundColor, setBG] = useState(colorList[9].backgroundColor);
  const [backgroundColorButton, setBGButton] = useState(colorList[9].buttonColor);
  const [textColor, setFontColor] = useState(colorList[9].textColor);

  const [effect, setEffect] = useState(false);

  const changeColor = () => {
    const newColor = getNewColor();
    setBG(newColor.backgroundColor);
    setBGButton(newColor.buttonColor);
    setFontColor(newColor.textColor);

    setEffect(false);
  };

  const getNewColor = () => {
    let newColor: ColorSet;
    do {
      newColor = colorList[Math.floor(Math.random() * colorList.length)];
    } while (newColor.backgroundColor === backgroundColor);
    return newColor;
  };

  return (
    <div className={`${backgroundColor} h-screen flex justify-center items-center`}>
      <button
        id="haha"
        className={`${backgroundColorButton} ${textColor} border-4 p-2 h-16 w-64 tracking-widest rounded-full font-bold text-xl  ${
          effect && "animate-side2side"
        }`}
        onClick={() => setEffect(true)}
        onAnimationEnd={changeColor}
      >
        PALIT KULAY
      </button>
    </div>
  );
}
