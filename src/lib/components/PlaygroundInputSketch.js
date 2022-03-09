import { Button, Stack, Container } from "@mui/material";
import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

function PlaygroundInputSketch({ onSubmit, width, height, strokeWidth }) {
  const [imgSrc, setImageSrc] = useState(null);
  if (!width) width = "500px";
  if (!height) height = "500px";
  if (!strokeWidth) strokeWidth = 15;
  const sketchRef = useRef(null);
  const takeScreenshot = () => {
    sketchRef.current
      .exportImage("png")
      .then((e) => {
        setImageSrc(e);
      })
      .catch((e) => {
        console.log("Error!");
      });
  };
  const submitSketch = () => {
    onSubmit(imgSrc);
  };
  const clearSketch = () => {
    sketchRef.current.clearCanvas();
  };
  return (
    <div style={{ display: "flex" }}>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Stack>
            <ReactSketchCanvas
              ref={sketchRef}
              width={width}
              height={height}
              strokeColor="white"
              strokeWidth={strokeWidth}
              canvasColor="black"
            ></ReactSketchCanvas>
            <Container>
              <Button onClick={takeScreenshot} variant="contained">
                Save!
              </Button>
              <Button onClick={clearSketch} variant="contained">
                Clear
              </Button>
            </Container>
          </Stack>
        </li>
        <li>
          <Button onClick={submitSketch}>Submit</Button>
        </li>
      </ul>
    </div>
  );
}

export default PlaygroundInputSketch;
