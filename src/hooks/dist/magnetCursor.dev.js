"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var magnetCursor = function magnetCursor(currentElement, mouse) {
  var clientRect = currentElement.current.getBoundingClientRect();
  var interpolation = 0.8;

  var lerp = function lerp(current, target, factor) {
    return current * (1 - factor) + target * factor;
  };

  var lerpingData = {
    x: {
      current: 0,
      target: (mouse.x - (clientRect.left + clientRect.width / 2)) * 0.15
    },
    y: {
      current: 0,
      target: (mouse.y - (clientRect.top + clientRect.height / 2)) * 0.15
    }
  };

  for (var item in lerpingData) {
    lerpingData[item].current = lerp(lerpingData[item].current, lerpingData[item].target, interpolation);
  }

  return lerpingData;
};

var _default = magnetCursor;
exports["default"] = _default;