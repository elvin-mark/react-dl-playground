"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PlaygroundOutputLabels(_ref) {
  let {
    categories,
    prob
  } = _ref;
  const series = [{
    data: prob
  }];
  const options = {
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: categories
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactApexcharts.default, {
    options: options,
    series: series,
    type: "bar",
    height: 350
  }));
}

var _default = PlaygroundOutputLabels;
exports.default = _default;