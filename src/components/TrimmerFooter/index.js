import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import Slider from "@material-ui/core/Slider";

import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import PublishIcon from "@material-ui/icons/Publish";

const TrimmerFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const ZoomWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  * {
    margin: 0px 5px;
  }
`;

function TrimmerFooter({ zoomValue, handleZoomChange, maxValueHandler }) {
  function handleChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      audioContext.decodeAudioData(event.target.result, function(buffer) {
        const duration = parseInt(buffer.duration);
        maxValueHandler(duration);
      });
    };

    reader.onerror = function(event) {
      console.error("An error ocurred reading the file: ", event);
    };

    reader.readAsArrayBuffer(file);
  }
  return (
    <TrimmerFooterWrapper>
      <ZoomWrapper>
        <ZoomOutIcon />
        <Slider
          value={zoomValue}
          step={0.2}
          min={1}
          max={2.5}
          onChange={handleZoomChange}
          aria-labelledby="continuous-slider"
        />
        <ZoomInIcon />
      </ZoomWrapper>
      <input
        accept="audio/*"
        id="contained-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        <Fab variant="extended" color="primary" component="span">
          <PublishIcon />
          Upload
        </Fab>
      </label>
    </TrimmerFooterWrapper>
  );
}

export default TrimmerFooter;
