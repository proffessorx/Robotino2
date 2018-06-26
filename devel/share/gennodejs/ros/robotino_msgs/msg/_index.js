
"use strict";

let PowerReadings = require('./PowerReadings.js');
let SetBHAPressures = require('./SetBHAPressures.js');
let BHAReadings = require('./BHAReadings.js');
let SetGrapplerAxes = require('./SetGrapplerAxes.js');
let MotorReadings = require('./MotorReadings.js');
let DigitalReadings = require('./DigitalReadings.js');
let NorthStarReadings = require('./NorthStarReadings.js');
let AnalogReadings = require('./AnalogReadings.js');
let EncoderReadings = require('./EncoderReadings.js');
let GripperState = require('./GripperState.js');
let SetGrapplerAxis = require('./SetGrapplerAxis.js');
let GrapplerReadings = require('./GrapplerReadings.js');

module.exports = {
  PowerReadings: PowerReadings,
  SetBHAPressures: SetBHAPressures,
  BHAReadings: BHAReadings,
  SetGrapplerAxes: SetGrapplerAxes,
  MotorReadings: MotorReadings,
  DigitalReadings: DigitalReadings,
  NorthStarReadings: NorthStarReadings,
  AnalogReadings: AnalogReadings,
  EncoderReadings: EncoderReadings,
  GripperState: GripperState,
  SetGrapplerAxis: SetGrapplerAxis,
  GrapplerReadings: GrapplerReadings,
};
