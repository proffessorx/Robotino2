// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class EncoderReadings {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.velocity = 0;
    this.position = 0;
    this.current = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EncoderReadings
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [velocity]
    bufferInfo = _serializer.uint32(obj.velocity, bufferInfo);
    // Serialize message field [position]
    bufferInfo = _serializer.uint32(obj.position, bufferInfo);
    // Serialize message field [current]
    bufferInfo = _serializer.uint32(obj.current, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EncoderReadings
    let tmp;
    let len;
    let data = new EncoderReadings();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocity]
    tmp = _deserializer.uint32(buffer);
    data.velocity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = _deserializer.uint32(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [current]
    tmp = _deserializer.uint32(buffer);
    data.current = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/EncoderReadings';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0b4033dda61bb04d3e2ea6c671f26183';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    uint32 velocity		# actual velocity in ticks/s
    uint32 position		# actual position in ticks
    uint32 current		# in A
    `;
  }

};

module.exports = EncoderReadings;
