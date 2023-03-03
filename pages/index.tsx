import { useState } from "react";
import { colorList, ColorSet } from "./data";

export default function Home() {
  const [colorScheme, setColorScheme] = useState(colorList[0]);

  const changeColor = () => {
    setColorScheme(getNewColor());
  };

  const getNewColor = () => {
    let newColor: ColorSet;
    do {
      newColor = colorList[Math.floor(Math.random() * colorList.length)];
    } while (newColor === colorScheme);

    return newColor;
  };

  const path =
  "M192 64L160 0H128L96 64 64 0H48C21.5 0 0 21.5 0 48V256H384V48c0-26.5-21.5-48-48-48H224L192 64zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"
  const viewBox = "0 0 384 512";

  return (
    <div
      className={`${colorScheme.backgroundColor} h-screen flex justify-center items-center`}
    >
      <svg
        viewBox={viewBox}
        className="h-52 w-52 inline-flex relative animate-ping mb-10"
      >
        <path d={path} className="fill-white opacity-30" />
      </svg>
      <button onClick={changeColor} className="absolute inline-flex mb-10">
        <svg viewBox={viewBox} className="h-52 w-52">
          <path d={path} className="fill-white hover:fill-gray-200" />
        </svg>
      </button>
    </div>
  );
}
