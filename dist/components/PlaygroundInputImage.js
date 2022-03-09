"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _reactWebcam = _interopRequireDefault(require("react-webcam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PlaygroundInputImage(_ref) {
  let {
    onSubmit
  } = _ref;
  const [inputOpt, setInputOpt] = (0, _react.useState)(false);
  const [imgSrc, setImageSrc] = (0, _react.useState)(null);
  const webcamRef = (0, _react.useRef)(null);

  const takeScreenshot = () => {
    setImageSrc(webcamRef.current.getScreenshot());
  };

  const changeHandler = e => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const submitImgSrc = () => {
    onSubmit(imgSrc);
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
    label: inputOpt ? "Camera" : "File"
  })), /*#__PURE__*/_react.default.createElement("li", null, inputOpt ? /*#__PURE__*/_react.default.createElement(_material.Stack, null, /*#__PURE__*/_react.default.createElement(_reactWebcam.default, {
    ref: webcamRef
  }), " ", /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: takeScreenshot
  }, "Screenshot!")) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "file",
    onChange: changeHandler
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: submitImgSrc
  }, "Submit!"))));
}

var _default = PlaygroundInputImage;
exports.default = _default;