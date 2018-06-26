// Auto-generated. Do not edit!

// (in-package robotino_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class NorthStarReadings {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.seq = 0;
    this.roomId = 0;
    this.numSpotsVisible = 0;
    this.pose = new geometry_msgs.msg.Pose();
    this.magSpot0 = 0;
    this.magSpot1 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NorthStarReadings
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [seq]
    bufferInfo = _serializer.uint32(obj.seq, bufferInfo);
    // Serialize message field [roomId]
    bufferInfo = _serializer.uint32(obj.roomId, bufferInfo);
    // Serialize message field [numSpotsVisible]
    bufferInfo = _serializer.uint32(obj.numSpotsVisible, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.pose, bufferInfo);
    // Serialize message field [magSpot0]
    bufferInfo = _serializer.uint32(obj.magSpot0, bufferInfo);
    // Serialize message field [magSpot1]
    bufferInfo = _serializer.uint32(obj.magSpot1, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NorthStarReadings
    let tmp;
    let len;
    let data = new NorthStarReadings();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [seq]
    tmp = _deserializer.uint32(buffer);
    data.seq = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [roomId]
    tmp = _deserializer.uint32(buffer);
    data.roomId = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [numSpotsVisible]
    tmp = _deserializer.uint32(buffer);
    data.numSpotsVisible = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [magSpot0]
    tmp = _deserializer.uint32(buffer);
    data.magSpot0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [magSpot1]
    tmp = _deserializer.uint32(buffer);
    data.magSpot1 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'robotino_msgs/NorthStarReadings';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b8db44cc88a378f5282e8add1661d1e7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time stamp
    uint32 seq
    uint32 roomId
    uint32 numSpotsVisible
    geometry_msgs/Pose pose
    uint32 magSpot0
    uint32 magSpot1
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = NorthStarReadings;
