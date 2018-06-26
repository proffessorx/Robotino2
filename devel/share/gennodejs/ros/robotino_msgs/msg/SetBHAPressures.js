// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SetBHAPressures {
  constructor() {
    this.pressures = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetBHAPressures
    // Serialize the length for message field [pressures]
    bufferInfo = _serializer.uint32(obj.pressures.length, bufferInfo);
    // Serialize message field [pressures]
    obj.pressures.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetBHAPressures
    let tmp;
    let len;
    let data = new SetBHAPressures();
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
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/SetBHAPressures';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f07803ec936ff4605f313dd88545e5bb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32[] pressures	# must be of size 8
    `;
  }

};

module.exports = SetBHAPressures;
