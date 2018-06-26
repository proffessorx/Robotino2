// Auto-generated. Do not edit!

// (in-package robotino_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetGripperStateRequest {
  constructor() {
    this.state = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetGripperStateRequest
    // Serialize message field [state]
    bufferInfo = _serializer.bool(obj.state, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetGripperStateRequest
    let tmp;
    let len;
    let data = new SetGripperStateRequest();
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
    // Returns string type for a service object
    return 'robotino_msgs/SetGripperStateRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '001fde3cab9e313a150416ff09c08ee4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool state
    
    `;
  }

};

class SetGripperStateResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetGripperStateResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetGripperStateResponse
    let tmp;
    let len;
    let data = new SetGripperStateResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robotino_msgs/SetGripperStateResponse';
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
  Request: SetGripperStateRequest,
  Response: SetGripperStateResponse
};
