
systemctl enable $(pwd)/Xvfb.service

systemctl start Xvfb.service
systemctl status Xvfb.service
