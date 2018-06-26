// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class DigitalReadings {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.values = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DigitalReadings
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize the length for message field [values]
    bufferInfo = _serializer.uint32(obj.values.length, bufferInfo);
    // Serialize message field [values]
    obj.values.forEach((val) => {
      bufferInfo = _serializer.bool(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DigitalReadings
    let tmp;
    let len;
    let data = new DigitalReadings();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [values]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [values]
    data.values = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.bool(buffer);
      data.values[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/DigitalReadings';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '21240637a82d18c261b7e2f567659e7e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    bool[] values
    `;
  }

};

module.exports = DigitalReadings;
