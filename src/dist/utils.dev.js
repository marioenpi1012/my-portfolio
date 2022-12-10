"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateDistance = void 0;

var calculateDistance = function calculateDistance(x1, x2, y1, y2) {
  return Math.hypot(x1 - x2, y1 - y2);
};

exports.calculateDistance = calculateDistance;