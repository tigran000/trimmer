import React, { useState } from "react";

import TrimmerContainer from "./components/TrimmerContainer";
import TrimmerFooter from "./components/TrimmerFooter";
import MusicSlider from "./components/MusicSlider";

function App() {
  const [value, setValue] = useState([0, 5]);
  const [zoomValue, setZoomValue] = useState(1.75);
  const [maxValue, setMaxValue] = useState(10);

  const handleChange = (event, newValue) => setValue(newValue);

  const handleZoomChange = (event, newValue) => setZoomValue(newValue);

  const maxValueHandler = duration => setMaxValue(duration);

  return (
    <TrimmerContainer>
      <MusicSlider
        min={0}
        max={maxValue}
        value={value}
        step={0.5}
        marks
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        style={{ width: `${zoomValue * 40}%`, height: "30px" }}
      />

      <hr />
      <TrimmerFooter
        zoomValue={zoomValue}
        handleZoomChange={handleZoomChange}
        maxValueHandler={maxValueHandler}
      />
    </TrimmerContainer>
  );
}

export default App;
