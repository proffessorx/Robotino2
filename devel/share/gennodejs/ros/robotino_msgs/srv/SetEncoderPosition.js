// Auto-generated. Do not edit!

// (in-package robotino_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetEncoderPositionRequest {
  constructor() {
    this.position = 0;
    this.velocity = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetEncoderPositionRequest
    // Serialize message field [position]
    bufferInfo = _serializer.uint32(obj.position, bufferInfo);
    // Serialize message field [velocity]
    bufferInfo = _serializer.uint32(obj.velocity, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetEncoderPositionRequest
    let tmp;
    let len;
    let data = new SetEncoderPositionRequest();
    // Deserialize message field [position]
    tmp = _deserializer.uint32(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocity]
    tmp = _deserializer.uint32(buffer);
    data.velocity = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robotino_msgs/SetEncoderPositionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e17f4b08b3e2cdbbf2b0d78e4f62e5d6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 position
    uint32 velocity
    
    `;
  }

};

class SetEncoderPositionResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetEncoderPositionResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetEncoderPositionResponse
    let tmp;
    let len;
    let data = new SetEncoderPositionResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robotino_msgs/SetEncoderPositionResponse';
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
  Request: SetEncoderPositionRequest,
  Response: SetEncoderPositionResponse
};
