#!/bin/bash
CODEDEPLOY_BIN="/opt/codedeploy-agent/bin/codedeploy-agent"
$CODEDEPLOY_BIN stop
yum erase codedeploy-agent -y

cd /home/ec2-user

yum update -y
yum install -y httpd ruby wget unzip

wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
# Stop HTTPD service
sudo systemctl stop httpd

# Start code deploy agent
sudo service codedeploy-agent start
sudo service codedeploy-agent status
sudo service codedeploy-agent enable