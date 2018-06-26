// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class MotorReadings {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.velocities = [];
    this.positions = [];
    this.currents = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MotorReadings
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize the length for message field [velocities]
    bufferInfo = _serializer.uint32(obj.velocities.length, bufferInfo);
    // Serialize message field [velocities]
    obj.velocities.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [positions]
    bufferInfo = _serializer.uint32(obj.positions.length, bufferInfo);
    // Serialize message field [positions]
    obj.positions.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [currents]
    bufferInfo = _serializer.uint32(obj.currents.length, bufferInfo);
    // Serialize message field [currents]
    obj.currents.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MotorReadings
    let tmp;
    let len;
    let data = new MotorReadings();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
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
    // Deserialize array length for message field [positions]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [positions]
    data.positions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.positions[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [currents]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [currents]
    data.currents = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.currents[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/MotorReadings';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3974e9bd8305667fc0637697b49a8e1f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    float32[] velocities 	# in rpm
    int32[] positions
    float32[] currents		# in A
    `;
  }

};

module.exports = MotorReadings;
