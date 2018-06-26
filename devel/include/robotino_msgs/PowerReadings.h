// Generated by gencpp from file robotino_msgs/PowerReadings.msg
// DO NOT EDIT!


#ifndef ROBOTINO_MSGS_MESSAGE_POWERREADINGS_H
#define ROBOTINO_MSGS_MESSAGE_POWERREADINGS_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace robotino_msgs
{
template <class ContainerAllocator>
struct PowerReadings_
{
  typedef PowerReadings_<ContainerAllocator> Type;

  PowerReadings_()
    : stamp()
    , current(0.0)
    , voltage(0.0)  {
    }
  PowerReadings_(const ContainerAllocator& _alloc)
    : stamp()
    , current(0.0)
    , voltage(0.0)  {
  (void)_alloc;
    }



   typedef ros::Time _stamp_type;
  _stamp_type stamp;

   typedef float _current_type;
  _current_type current;

   typedef float _voltage_type;
  _voltage_type voltage;




  typedef boost::shared_ptr< ::robotino_msgs::PowerReadings_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::robotino_msgs::PowerReadings_<ContainerAllocator> const> ConstPtr;

}; // struct PowerReadings_

typedef ::robotino_msgs::PowerReadings_<std::allocator<void> > PowerReadings;

typedef boost::shared_ptr< ::robotino_msgs::PowerReadings > PowerReadingsPtr;
typedef boost::shared_ptr< ::robotino_msgs::PowerReadings const> PowerReadingsConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::robotino_msgs::PowerReadings_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::robotino_msgs::PowerReadings_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace robotino_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'robotino_msgs': ['/home/robotino/catkin_ws/src/robotino/robotino-ros-pkg/robotino_msgs/msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::robotino_msgs::PowerReadings_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::robotino_msgs::PowerReadings_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::robotino_msgs::PowerReadings_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::robotino_msgs::PowerReadings_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::robotino_msgs::PowerReadings_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::robotino_msgs::PowerReadings_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::robotino_msgs::PowerReadings_<ContainerAllocator> >
{
  static const char* value()
  {
    return "a00aebd29e1775a226f3fa330a4fec59";
  }

  static const char* value(const ::robotino_msgs::PowerReadings_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xa00aebd29e1775a2ULL;
  static const uint64_t static_value2 = 0x26f3fa330a4fec59ULL;
};

template<class ContainerAllocator>
struct DataType< ::robotino_msgs::PowerReadings_<ContainerAllocator> >
{
  static const char* value()
  {
    return "robotino_msgs/PowerReadings";
  }

  static const char* value(const ::robotino_msgs::PowerReadings_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::robotino_msgs::PowerReadings_<ContainerAllocator> >
{
  static const char* value()
  {
    return "time stamp	# time-stamp\n\
float32 current	# current in A\n\
float32 voltage	# voltage in V\n\
";
  }

  static const char* value(const ::robotino_msgs::PowerReadings_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::robotino_msgs::PowerReadings_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.stamp);
      stream.next(m.current);
      stream.next(m.voltage);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct PowerReadings_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::robotino_msgs::PowerReadings_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::robotino_msgs::PowerReadings_<ContainerAllocator>& v)
  {
    s << indent << "stamp: ";
    Printer<ros::Time>::stream(s, indent + "  ", v.stamp);
    s << indent << "current: ";
    Printer<float>::stream(s, indent + "  ", v.current);
    s << indent << "voltage: ";
    Printer<float>::stream(s, indent + "  ", v.voltage);
  }
};

} // namespace message_operations
} // namespace ros

#endif // ROBOTINO_MSGS_MESSAGE_POWERREADINGS_H
