import { useState } from "react";
import convert from "color-convert";
import * as Separator from "@radix-ui/react-separator";

export function ColorInputs() {
  const [rgb, setRgb] = useState([255, 0, 0]);
  const [cmyk, setCmyk] = useState([0, 100, 100, 0]);
  const [hsl, setHsl] = useState([0, 100, 50]);
  const [hsv, setHsv] = useState([0, 100, 100]);

  const handleRgbChange = (e) => {
    const { name, value } = e.target;
    const newRgb = [...rgb];
    newRgb[name] = Number(value);
    setRgb(newRgb);
    updateColors(newRgb, "rgb");
  };

  const handleCmykChange = (e) => {
    const { name, value } = e.target;
    const newCmyk = [...cmyk];
    newCmyk[name] = Number(value);
    setCmyk(newCmyk);
    updateColors(newCmyk, "cmyk");
  };

  const handleHslChange = (e) => {
    const { name, value } = e.target;
    const newHsl = [...hsl];
    newHsl[name] = Number(value);
    setHsl(newHsl);
    updateColors(newHsl, "hsl");
  };

  const handleHsvChange = (e) => {
    const { name, value } = e.target;
    const newHsv = [...hsv];
    newHsv[name] = Number(value);
    setHsv(newHsv);
    updateColors(newHsv, "hsv");
  };

  const updateColors = (color, format) => {
    if (format === "rgb") {
      setCmyk(convert.rgb.cmyk(color));
      setHsl(convert.rgb.hsl(color));
      setHsv(convert.rgb.hsv(color));
    } else if (format === "cmyk") {
      const newRgb = convert.cmyk.rgb(color);
      setRgb(newRgb);
      setHsl(convert.rgb.hsl(newRgb));
      setHsv(convert.rgb.hsv(newRgb));
    } else if (format === "hsl") {
      const newRgb = convert.hsl.rgb(color);
      setRgb(newRgb);
      setCmyk(convert.rgb.cmyk(newRgb));
      setHsv(convert.rgb.hsv(newRgb));
    } else if (format === "hsv") {
      const newRgb = convert.hsv.rgb(color);
      setRgb(newRgb);
      setCmyk(convert.rgb.cmyk(newRgb));
      setHsl(convert.rgb.hsl(newRgb));
    }
  };

  return (
    <>
      <div className="flex gap-16 mt-20 border border-slate-600 p-8 rounded-lg ">
        <div className="flex flex-col items-center justify-between">
          <h3 className="text-slate-200">RGB</h3>
          <div className="flex gap-2 mt-2">
            <input
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
              type="number"
              name="0"
              value={rgb[0]}
              onChange={handleRgbChange}
              min="0"
              max="255"
            />
            <input
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
              type="number"
              name="1"
              value={rgb[1]}
              onChange={handleRgbChange}
              min="0"
              max="255"
            />
            <input
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
              type="number"
              name="2"
              value={rgb[2]}
              onChange={handleRgbChange}
              min="0"
              max="255"
            />
          </div>

          <h3 className="mt-3 text-slate-200">HSL</h3>
          <div className="flex gap-2 mt-2">
            <input
              type="number"
              name="0"
              value={hsl[0]}
              onChange={handleHslChange}
              min="0"
              max="360"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
            <input
              type="number"
              name="1"
              value={hsl[1]}
              onChange={handleHslChange}
              min="0"
              max="100"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
            <input
              type="number"
              name="2"
              value={hsl[2]}
              onChange={handleHslChange}
              min="0"
              max="100"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
          </div>
          <h3 className="mt-3 text-slate-200">HSV</h3>
          <div className="flex gap-2 mt-2">
            <input
              type="number"
              name="0"
              value={hsv[0]}
              onChange={handleHsvChange}
              min="0"
              max="360"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
            <input
              type="number"
              name="1"
              value={hsv[1]}
              onChange={handleHsvChange}
              min="0"
              max="100"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
            <input
              type="number"
              name="2"
              value={hsv[2]}
              onChange={handleHsvChange}
              min="0"
              max="100"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
          </div>
          <h3 className="mt-3 text-slate-200">CMYK</h3>
          <div className="flex gap-2 mt-2">
            <input
              type="number"
              name="0"
              value={cmyk[0]}
              onChange={handleCmykChange}
              min="0"
              max="100"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
            <input
              type="number"
              name="1"
              value={cmyk[1]}
              onChange={handleCmykChange}
              min="0"
              max="100"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
            <input
              type="number"
              name="2"
              value={cmyk[2]}
              onChange={handleCmykChange}
              min="0"
              max="100"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
            <input
              type="number"
              name="3"
              value={cmyk[3]}
              onChange={handleCmykChange}
              min="0"
              max="100"
              className="text-slate-200 rounded-lg bg-slate-700 border border-slate-600 p-2.5 w-full"
            />
          </div>
        </div>
        <Separator.Root className="h-[100px] w-[1px] bg-slate-400 rounded-xl place-self-center" orientation="vertical" decorative/>
        <div
          className="mt-5 h-80 w-80 rounded-md"
          style={{
            backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
          }}
        />
      </div>
    </>
  );
}
