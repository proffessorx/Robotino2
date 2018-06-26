// Auto-generated. Do not edit!

// (in-package robotino_local_move.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class LocalMoveResult {
  constructor() {
    this.goal_reached = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LocalMoveResult
    // Serialize message field [goal_reached]
    bufferInfo = _serializer.bool(obj.goal_reached, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LocalMoveResult
    let tmp;
    let len;
    let data = new LocalMoveResult();
    // Deserialize message field [goal_reached]
    tmp = _deserializer.bool(buffer);
    data.goal_reached = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_local_move/LocalMoveResult';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a65bc774d2139031955fd7cc94fdd40f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    #result definition
    bool goal_reached #true if goal is reached
    
    `;
  }

};

module.exports = LocalMoveResult;
