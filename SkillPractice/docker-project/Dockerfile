# ubuntu:18.04에는 tree와 wget이 설치되어있지 않습니다. tree와 wget이 설치된 이미지를 만드는 Dockerfile
# 레이어가 2개
FROM ubuntu:18.04
RUN apt update
RUN apt install -y tree wget

# ubuntu:18.04 대신 centos:8을 기반으로 git이 설치된 이미지를 만드는 Dockerfile
FROM centos:8
RUN apt install && apt install -y git