import { useState } from "react";
import { colorList, ColorSet } from "./data";
import PaintBrush from "../components/PaintBrush";

export default function Home() {
  const [colorScheme, setColorScheme] = useState(colorList[0]);
  const [effect, setEffect] = useState(false);

  const changeColor = () => {
    setColorScheme(getNewColor());
    setEffect(true);
  };

  const getNewColor = () => {
    let newColor: ColorSet;
    do {
      newColor = colorList[Math.floor(Math.random() * colorList.length)];
    } while (newColor === colorScheme);

    return newColor;
  };

  return (
    <div
      className={`${colorScheme.backgroundColor} h-screen flex justify-center items-center`}
    >
      <PaintBrush
        svgClassName={`h-52 w-52 inline-flex relative mb-10 ${
          effect && "animate-ping2"
        }`}
        pathClassName="fill-white opacity-30"
        onAnimationEnd={() => setEffect(false)}
      />

      <button
        disabled={effect}
        onClick={changeColor}
        className="absolute inline-flex mb-10"
      >
        <PaintBrush
          svgClassName="h-52 w-52"
          pathClassName="fill-white hover:fill-gray-200"
        />
      </button>
    </div>
  );
}
