import { Button, FormControlLabel, Stack, Switch } from "@mui/material";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function PlaygroundInputImage({ onSubmit }) {
  const [inputOpt, setInputOpt] = useState(false);
  const [imgSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  const takeScreenshot = () => {
    setImageSrc(webcamRef.current.getScreenshot());
  };
  const changeHandler = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const submitImgSrc = () => {
    onSubmit(imgSrc);
  };
  return (
    <div style={{ display: "flex" }}>
      <ul style={{ listStyleType: "none", width: "400px" }}>
        <li>
          <FormControlLabel
            control={<Switch onClick={() => setInputOpt(!inputOpt)}></Switch>}
            label={inputOpt ? "Camera" : "File"}
          ></FormControlLabel>
        </li>
        <li>
          {inputOpt ? (
            <Stack>
              <Webcam ref={webcamRef}></Webcam>{" "}
              <Button variant="contained" onClick={takeScreenshot}>
                Screenshot!
              </Button>
            </Stack>
          ) : (
            <div>
              <input type="file" name="file" onChange={changeHandler}></input>
            </div>
          )}
        </li>
        <li>
          <Button onClick={submitImgSrc}>Submit!</Button>
        </li>
      </ul>
    </div>
  );
}

export default PlaygroundInputImage;
