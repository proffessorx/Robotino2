// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SetGrapplerAxis {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.axis = 0;
    this.angle = 0.0;
    this.velocity = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetGrapplerAxis
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [axis]
    bufferInfo = _serializer.uint32(obj.axis, bufferInfo);
    // Serialize message field [angle]
    bufferInfo = _serializer.float32(obj.angle, bufferInfo);
    // Serialize message field [velocity]
    bufferInfo = _serializer.float32(obj.velocity, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetGrapplerAxis
    let tmp;
    let len;
    let data = new SetGrapplerAxis();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [axis]
    tmp = _deserializer.uint32(buffer);
    data.axis = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angle]
    tmp = _deserializer.float32(buffer);
    data.angle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocity]
    tmp = _deserializer.float32(buffer);
    data.velocity = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/SetGrapplerAxis';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a709aba75be9516258888daf559c39d4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    uint32 axis			# axis number (axes start from 0)
    float32 angle		# in degrees
    float32 velocity	# in rpm
    `;
  }

};

module.exports = SetGrapplerAxis;
