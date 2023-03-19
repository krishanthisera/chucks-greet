#!/bin/bash

yum update -y
yum install -y httpd ruby wget

wget https://bucket-name.s3.region-identifier.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
# Stop HTTPD service
sudo systemctl stop httpd

# Start code deploy agent
sudo service codedeploy-agent start
sudo service codedeploy-agent status
sudo service codedeploy-agent enable


