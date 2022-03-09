"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _reactSketchCanvas = require("react-sketch-canvas");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PlaygroundInputSketch(_ref) {
  let {
    onSubmit,
    width,
    height,
    strokeWidth
  } = _ref;
  const [imgSrc, setImageSrc] = (0, _react.useState)(null);
  if (!width) width = "500px";
  if (!height) height = "500px";
  if (!strokeWidth) strokeWidth = 15;
  const sketchRef = (0, _react.useRef)(null);

  const takeScreenshot = () => {
    sketchRef.current.exportImage("png").then(e => {
      setImageSrc(e);
    }).catch(e => {
      console.log("Error!");
    });
  };

  const submitSketch = () => {
    onSubmit(imgSrc);
  };

  const clearSketch = () => {
    sketchRef.current.clearCanvas();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement("ul", {
    style: {
      listStyleType: "none"
    }
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_material.Stack, null, /*#__PURE__*/_react.default.createElement(_reactSketchCanvas.ReactSketchCanvas, {
    ref: sketchRef,
    width: width,
    height: height,
    strokeColor: "white",
    strokeWidth: strokeWidth,
    canvasColor: "black"
  }), /*#__PURE__*/_react.default.createElement(_material.Container, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: takeScreenshot,
    variant: "contained"
  }, "Save!"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: clearSketch,
    variant: "contained"
  }, "Clear")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: submitSketch
  }, "Submit"))));
}

var _default = PlaygroundInputSketch;
exports.default = _default;