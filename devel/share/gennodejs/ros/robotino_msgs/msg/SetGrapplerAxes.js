// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SetGrapplerAxes {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.angles = [];
    this.velocities = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetGrapplerAxes
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize the length for message field [angles]
    bufferInfo = _serializer.uint32(obj.angles.length, bufferInfo);
    // Serialize message field [angles]
    obj.angles.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [velocities]
    bufferInfo = _serializer.uint32(obj.velocities.length, bufferInfo);
    // Serialize message field [velocities]
    obj.velocities.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetGrapplerAxes
    let tmp;
    let len;
    let data = new SetGrapplerAxes();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [angles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angles]
    data.angles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.angles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [velocities]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocities]
    data.velocities = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.velocities[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/SetGrapplerAxes';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2d3c214086c6fdfe1e85f9e5abf4507a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    float32[] angles		# in degrees
    float32[] velocities	# in rpm
    `;
  }

};

module.exports = SetGrapplerAxes;
