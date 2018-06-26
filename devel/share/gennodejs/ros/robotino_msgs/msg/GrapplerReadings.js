// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class GrapplerReadings {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.seq = 0;
    this.numServos = 0;
    this.torqueEnabled = false;
    this.angles = [];
    this.velocities = [];
    this.errors = [];
    this.channels = [];
    this.ids = [];
    this.cwAxesLimits = [];
    this.ccwAxesLimits = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GrapplerReadings
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [seq]
    bufferInfo = _serializer.uint32(obj.seq, bufferInfo);
    // Serialize message field [numServos]
    bufferInfo = _serializer.uint32(obj.numServos, bufferInfo);
    // Serialize message field [torqueEnabled]
    bufferInfo = _serializer.bool(obj.torqueEnabled, bufferInfo);
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
    // Serialize the length for message field [errors]
    bufferInfo = _serializer.uint32(obj.errors.length, bufferInfo);
    // Serialize message field [errors]
    obj.errors.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    // Serialize the length for message field [channels]
    bufferInfo = _serializer.uint32(obj.channels.length, bufferInfo);
    // Serialize message field [channels]
    obj.channels.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    // Serialize the length for message field [ids]
    bufferInfo = _serializer.uint32(obj.ids.length, bufferInfo);
    // Serialize message field [ids]
    obj.ids.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    // Serialize the length for message field [cwAxesLimits]
    bufferInfo = _serializer.uint32(obj.cwAxesLimits.length, bufferInfo);
    // Serialize message field [cwAxesLimits]
    obj.cwAxesLimits.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [ccwAxesLimits]
    bufferInfo = _serializer.uint32(obj.ccwAxesLimits.length, bufferInfo);
    // Serialize message field [ccwAxesLimits]
    obj.ccwAxesLimits.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GrapplerReadings
    let tmp;
    let len;
    let data = new GrapplerReadings();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [seq]
    tmp = _deserializer.uint32(buffer);
    data.seq = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numServos]
    tmp = _deserializer.uint32(buffer);
    data.numServos = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [torqueEnabled]
    tmp = _deserializer.bool(buffer);
    data.torqueEnabled = tmp.data;
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
    // Deserialize array length for message field [errors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [errors]
    data.errors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.errors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [channels]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [channels]
    data.channels = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.channels[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [ids]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ids]
    data.ids = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.ids[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [cwAxesLimits]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cwAxesLimits]
    data.cwAxesLimits = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.cwAxesLimits[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [ccwAxesLimits]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ccwAxesLimits]
    data.ccwAxesLimits = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.ccwAxesLimits[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/GrapplerReadings';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '53d1f6c81df9b5242320201fe0231738';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    uint32 seq
    uint32 numServos
    bool torqueEnabled
    float32[] angles		# in degrees
    float32[] velocities	# in rpm
    uint32[] errors
    uint32[] channels
    uint32[] ids
    float32[] cwAxesLimits 	# in degrees
    float32[] ccwAxesLimits	# in degrees
    `;
  }

};

module.exports = GrapplerReadings;
