#!/bin/bash
set -e
function addserver {
  printf "domain .docker\nnameserver 127.0.0.1\n"
  cat /etc/resolv.conf
}
echo "doing echo"
inout=$(addserver)
cp /etc/resolv.conf /etc/resolv.conf.docker
printf "$inout\n" > /etc/resolv.conf
exec /app/docker-entrypoint.sh "forego" "start" "-r"
