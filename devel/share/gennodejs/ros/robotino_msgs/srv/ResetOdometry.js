// Auto-generated. Do not edit!

// (in-package robotino_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ResetOdometryRequest {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.phi = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ResetOdometryRequest
    // Serialize message field [x]
    bufferInfo = _serializer.float32(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float32(obj.y, bufferInfo);
    // Serialize message field [phi]
    bufferInfo = _serializer.float32(obj.phi, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ResetOdometryRequest
    let tmp;
    let len;
    let data = new ResetOdometryRequest();
    // Deserialize message field [x]
    tmp = _deserializer.float32(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float32(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [phi]
    tmp = _deserializer.float32(buffer);
    data.phi = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robotino_msgs/ResetOdometryRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '400210218ff66e5bce9e5be16653c0c8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 x
    float32 y
    float32 phi
    
    `;
  }

};

class ResetOdometryResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ResetOdometryResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ResetOdometryResponse
    let tmp;
    let len;
    let data = new ResetOdometryResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robotino_msgs/ResetOdometryResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    `;
  }

};

module.exports = {
  Request: ResetOdometryRequest,
  Response: ResetOdometryResponse
};
