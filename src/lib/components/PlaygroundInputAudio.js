import {
  Button,
  FormControlLabel,
  Stack,
  Switch,
  Container,
} from "@mui/material";
import { React, useState, useRef } from "react";
import { ReactMic } from "react-mic";

function PlaygroundInputAudio({ onSubmit }) {
  const [inputOpt, setInputOpt] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [recording, setRecording] = useState(false);
  const webcamRef = useRef(null);

  const changeHandler = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setAudioSrc(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const getAudioData = (data) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setAudioSrc(e.target.result);
    };
    reader.readAsDataURL(data["blob"]);
  };
  const submitAudioSrc = () => {
    onSubmit(audioSrc);
  };

  return (
    <div style={{ display: "flex" }}>
      <ul style={{ listStyleType: "none", width: "400px" }}>
        <li>
          <FormControlLabel
            control={<Switch onClick={() => setInputOpt(!inputOpt)}></Switch>}
            label={inputOpt ? "Mic" : "File"}
          ></FormControlLabel>
        </li>
        <li>
          {inputOpt ? (
            <Stack>
              <Container>
                <ReactMic
                  record={recording}
                  className="sound-wave"
                  mimeType="audio/wav"
                  onStop={getAudioData}
                ></ReactMic>
                <Button variant="contained" onClick={() => setRecording(true)}>
                  Record!
                </Button>
                <Button variant="contained" onClick={() => setRecording(false)}>
                  Stop
                </Button>
              </Container>
            </Stack>
          ) : (
            <div>
              <input type="file" name="file" onChange={changeHandler}></input>
            </div>
          )}
        </li>
        <li>
          <Button onClick={submitAudioSrc}>Submit!</Button>
        </li>
      </ul>
    </div>
  );
}

export default PlaygroundInputAudio;
