sudo Xvfb :5 -once -screen 8 1024x768x8  &
export DISPLAY=:5.8
./demo.sh
sudo killall Xvfb
