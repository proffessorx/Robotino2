// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class BHAReadings {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.pressures = [];
    this.cablepull = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BHAReadings
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize the length for message field [pressures]
    bufferInfo = _serializer.uint32(obj.pressures.length, bufferInfo);
    // Serialize message field [pressures]
    obj.pressures.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [cablepull]
    bufferInfo = _serializer.uint32(obj.cablepull.length, bufferInfo);
    // Serialize message field [cablepull]
    obj.cablepull.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BHAReadings
    let tmp;
    let len;
    let data = new BHAReadings();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [pressures]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pressures]
    data.pressures = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.pressures[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [cablepull]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cablepull]
    data.cablepull = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.cablepull[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/BHAReadings';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'db28e0e5f4b0a0da881baf9c7f3c94a1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    float32[] pressures	# in bar
    float32[] cablepull
    `;
  }

};

module.exports = BHAReadings;
