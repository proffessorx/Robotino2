#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
    DESTDIR_ARG="--root=$DESTDIR"
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/robotino/catkin_ws/src/vfk_msb_client"

# snsure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/robotino/catkin_ws/install/lib/python2.7/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/robotino/catkin_ws/install/lib/python2.7/dist-packages:/home/robotino/catkin_ws/build/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/robotino/catkin_ws/build" \
    "/usr/bin/python" \
    "/home/robotino/catkin_ws/src/vfk_msb_client/setup.py" \
    build --build-base "/home/robotino/catkin_ws/build/vfk_msb_client" \
    install \
    $DESTDIR_ARG \
    --install-layout=deb --prefix="/home/robotino/catkin_ws/install" --install-scripts="/home/robotino/catkin_ws/install/bin"
