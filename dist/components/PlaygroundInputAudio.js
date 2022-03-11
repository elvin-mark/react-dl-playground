"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _reactMic = require("react-mic");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement("ul", {
    style: {
      listStyleType: "none",
      width: "400px"
    }
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/_react.default.createElement(_material.Switch, {
      onClick: () => setInputOpt(!inputOpt)
    }),
    label: inputOpt ? "Mic" : "File"
  })), /*#__PURE__*/_react.default.createElement("li", null, inputOpt ? /*#__PURE__*/_react.default.createElement(_material.Stack, null, /*#__PURE__*/_react.default.createElement(_material.Container, null, /*#__PURE__*/_react.default.createElement(_reactMic.ReactMic, {
    record: recording,
    className: "sound-wave",
    mimeType: "audio/wav",
    onStop: getAudioData
  }), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: () => setRecording(true)
  }, "Record!"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: () => setRecording(false)
  }, "Stop"))) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "file",
    onChange: changeHandler
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: submitAudioSrc
  }, "Submit!"))));
}

var _default = PlaygroundInputAudio;
exports.default = _default;