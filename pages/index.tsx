import { useState } from "react";
import { listBg } from "./data";

export default function Home() {
  const [bg, setBG] = useState(listBg[9].backgroundColor);
  const [bgButton, setBGButton] = useState(listBg[9].buttonColor);
  const [fontColor, setFontColor] = useState(listBg[9].textColor);

  const [effect, setEffect] = useState(false);

  const changeColor = () => {
    const newColor = getNewColor();
    setBG(newColor.backgroundColor);
    setBGButton(newColor.buttonColor);
    setFontColor(newColor.textColor);

    setEffect(false);
  };

  const getNewColor = () => {
    let newColor;
    do {
      newColor = listBg[Math.floor(Math.random() * listBg.length)];
    } while (newColor.backgroundColor === bg);
    return newColor;
  };

  return (
    <div className={`${bg} h-screen flex justify-center items-center`}>
      <button
        id="haha"
        className={`${bgButton} ${fontColor} border-4 p-2 h-16 w-64 tracking-widest rounded-full font-bold text-xl  ${
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
