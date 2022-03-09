"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _material = require("@mui/material");

var _react = require("react");

var _reactMic = require("react-mic");

function PlaygroundInputAudio(_ref) {
  let {
    onSubmit
  } = _ref;
  const [inputOpt, setInputOpt] = (0, _react.useState)(false);
  const [audioSrc, setAudioSrc] = (0, _react.useState)(null);
  const [recording, setRecording] = (0, _react.useState)(false);
  const webcamRef = (0, _react.useRef)(null);

  const changeHandler = e => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      setAudioSrc(e.target.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const getAudioData = data => {
    const reader = new FileReader();

    reader.onload = e => {
      setAudioSrc(e.target.result);
    };

    reader.readAsDataURL(data["blob"]);
  };

  const submitAudioSrc = () => {
    onSubmit(audioSrc);
  };

  return /*#__PURE__*/_react.React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.React.createElement("ul", {
    style: {
      listStyleType: "none",
      width: "400px"
    }
  }, /*#__PURE__*/_react.React.createElement("li", null, /*#__PURE__*/_react.React.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/_react.React.createElement(_material.Switch, {
      onClick: () => setInputOpt(!inputOpt)
    }),
    label: inputOpt ? "Mic" : "File"
  })), /*#__PURE__*/_react.React.createElement("li", null, inputOpt ? /*#__PURE__*/_react.React.createElement(_material.Stack, null, /*#__PURE__*/_react.React.createElement(_material.Container, null, /*#__PURE__*/_react.React.createElement(_reactMic.ReactMic, {
    record: recording,
    className: "sound-wave",
    mimeType: "audio/wav",
    onStop: getAudioData
  }), /*#__PURE__*/_react.React.createElement(_material.Button, {
    variant: "contained",
    onClick: () => setRecording(true)
  }, "Record!"), /*#__PURE__*/_react.React.createElement(_material.Button, {
    variant: "contained",
    onClick: () => setRecording(false)
  }, "Stop"))) : /*#__PURE__*/_react.React.createElement("div", null, /*#__PURE__*/_react.React.createElement("input", {
    type: "file",
    name: "file",
    onChange: changeHandler
  }))), /*#__PURE__*/_react.React.createElement("li", null, /*#__PURE__*/_react.React.createElement(_material.Button, {
    onClick: submitAudioSrc
  }, "Submit!"))));
}

var _default = PlaygroundInputAudio;
exports.default = _default;