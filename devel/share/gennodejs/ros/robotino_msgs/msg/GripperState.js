// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class GripperState {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.state = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GripperState
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [state]
    bufferInfo = _serializer.bool(obj.state, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GripperState
    let tmp;
    let len;
    let data = new GripperState();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [state]
    tmp = _deserializer.bool(buffer);
    data.state = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/GripperState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9aa764d58396f955a97125bca8f1e897';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    bool state	# true if open else false if closed
    `;
  }

};

module.exports = GripperState;
