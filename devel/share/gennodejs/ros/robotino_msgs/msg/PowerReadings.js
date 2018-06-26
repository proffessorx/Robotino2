// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PowerReadings {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.current = 0.0;
    this.voltage = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PowerReadings
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [current]
    bufferInfo = _serializer.float32(obj.current, bufferInfo);
    // Serialize message field [voltage]
    bufferInfo = _serializer.float32(obj.voltage, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PowerReadings
    let tmp;
    let len;
    let data = new PowerReadings();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [current]
    tmp = _deserializer.float32(buffer);
    data.current = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [voltage]
    tmp = _deserializer.float32(buffer);
    data.voltage = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/PowerReadings';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a00aebd29e1775a226f3fa330a4fec59';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp	# time-stamp
    float32 current	# current in A
    float32 voltage	# voltage in V
    
    `;
  }

};

module.exports = PowerReadings;
